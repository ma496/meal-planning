// src/types/index.ts
export interface Meal {
  Breakfast: string;
  Lunch: string;
  Dinner: string;
}

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type MealPlan = {
  [key in Day]: Meal;
}; 