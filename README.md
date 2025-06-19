# Meal Planning Web App

## Project Overview

This is a full-stack web application that provides a static weekly meal plan for a family of four. The app accommodates basic dietary restrictions (vegetarian, gluten-free), allows users to register and log in, and displays a personalized meal plan on a secure dashboard. The backend is a NestJS API with JWT authentication, and the frontend is a Next.js application.

## Live Links

*   **Live Dashboard URL (Vercel):** [To be deployed]
*   **API Base URL (Heroku):** [To be deployed]
*   **API Documentation (Swagger):** `[YOUR_HEROKU_URL]/api`

## Features

*   User registration with name, email, password, and dietary preference.
*   Secure user login with JWT-based authentication.
*   Protected dashboard page to view the weekly meal plan.
*   Personalized meal plans for standard, vegetarian, and gluten-free diets.
*   Responsive design for both desktop and mobile.
*   Logout functionality.
*   Backend API with Swagger documentation.
*   Scheduled cron job for simulated meal plan updates.

## Technology Stack

*   **Frontend:** Next.js (with App Router), React, TypeScript, Tailwind CSS, Axios
*   **Backend:** NestJS, TypeScript
*   **Database:** MongoDB with Mongoose
*   **Authentication:** JWT (JSON Web Tokens) with Passport.js
*   **API Documentation:** Swagger (OpenAPI)
*   **Scheduling:** `@nestjs/schedule` (Cron Jobs)

## Local Setup Instructions

To run this project locally, you will need to have Node.js and npm installed.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd meal-planning
```

### 2. Backend Setup

Navigate to the backend directory, install dependencies, and set up your environment variables.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following variables. Replace the placeholder values with your actual credentials.

```env
# backend/.env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/meal-planner?retryWrites=true&w=majority
JWT_SECRET=YOUR_SUPER_SECRET_KEY_32_CHARS_LONG_AND_COMPLEX
```

Start the backend server:

```bash
npm run start:dev
```

The backend will be running at `http://localhost:3001`. You can access the Swagger API documentation at `http://localhost:3001/api`.

### 3. Frontend Setup

In a new terminal, navigate to the frontend directory, install dependencies, and set up your environment variables.

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```env
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will be running at `http://localhost:3000`.

## Access Credentials

You can register a new user or use the following sample credentials for evaluation purposes once you have the application running locally.

*   **Email:** `user@example.com`
*   **Password:** `password123`

*(Note: You must register this user first through the registration page before you can log in.)* 