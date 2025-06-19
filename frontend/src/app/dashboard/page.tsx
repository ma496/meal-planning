'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import type { MealPlan, Day } from '@/types';

export default function DashboardPage() {
  const [plan, setPlan] = useState<MealPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMealPlan = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/meal-plan`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPlan(response.data);
      } catch (err) {
        setError('Failed to fetch meal plan. You might be logged out.');
        console.error(err);
        // Also redirect to login if token is invalid (401 Unauthorized)
        if (axios.isAxiosError(err) && err.response?.status === 401) {
            localStorage.removeItem('access_token');
            router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMealPlan();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    router.push('/login');
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }
  
  const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Your Weekly Meal Plan</h1>
        <button
          onClick={handleLogout}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
        >
          Logout
        </button>
      </header>

      {error && <p className="mb-4 text-center text-red-600">{error}</p>}
      
      {plan ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {days.map((day) => (
            <div key={day} className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{day}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="font-medium text-gray-500">Breakfast</dt>
                    <dd className="mt-1 text-gray-900">{plan[day].Breakfast}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Lunch</dt>
                    <dd className="mt-1 text-gray-900">{plan[day].Lunch}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Dinner</dt>
                    <dd className="mt-1 text-gray-900">{plan[day].Dinner}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500">No meal plan available.</p>
      )}
    </div>
  );
} 