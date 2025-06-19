import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

const basePlan = {
  Monday: { Breakfast: 'Oatmeal', Lunch: 'Chicken Salad', Dinner: 'Spaghetti' },
  Tuesday: { Breakfast: 'Eggs', Lunch: 'Leftover Spaghetti', Dinner: 'Tacos' },
  Wednesday: { Breakfast: 'Smoothie', Lunch: 'Turkey Sandwich', Dinner: 'Salmon and Veggies' },
  Thursday: { Breakfast: 'Yogurt', Lunch: 'Leftover Salmon', Dinner: 'Pizza' },
  Friday: { Breakfast: 'Pancakes', Lunch: 'Leftover Pizza', Dinner: 'Burgers' },
  Saturday: { Breakfast: 'Cereal', Lunch: 'Out', Dinner: 'Steak' },
  Sunday: { Breakfast: 'Waffles', Lunch: 'Leftover Steak', Dinner: 'Roast Chicken' },
};

const vegetarianPlan = {
    Monday: { Breakfast: 'Oatmeal', Lunch: 'Quinoa Salad', Dinner: 'Mushroom Pasta' },
    Tuesday: { Breakfast: 'Tofu Scramble', Lunch: 'Leftover Pasta', Dinner: 'Black Bean Tacos' },
    Wednesday: { Breakfast: 'Smoothie', Lunch: 'Hummus Wrap', Dinner: 'Lentil Soup' },
    Thursday: { Breakfast: 'Yogurt', Lunch: 'Leftover Soup', Dinner: 'Veggie Pizza' },
    Friday: { Breakfast: 'Pancakes', Lunch: 'Leftover Pizza', Dinner: 'Veggie Burgers' },
    Saturday: { Breakfast: 'Cereal', Lunch: 'Out', Dinner: 'Stuffed Bell Peppers' },
    Sunday: { Breakfast: 'Waffles', Lunch: 'Leftovers', Dinner: 'Roasted Veggie Bowl' },
};

const glutenFreePlan = {
    Monday: { Breakfast: 'GF Oatmeal', Lunch: 'Chicken Salad (no croutons)', Dinner: 'GF Spaghetti' },
    Tuesday: { Breakfast: 'Eggs', Lunch: 'Leftover Spaghetti', Dinner: 'Corn Tortilla Tacos' },
    Wednesday: { Breakfast: 'Smoothie', Lunch: 'GF Turkey Wrap', Dinner: 'Salmon and Veggies' },
    Thursday: { Breakfast: 'Yogurt', Lunch: 'Leftover Salmon', Dinner: 'GF Pizza' },
    Friday: { Breakfast: 'GF Pancakes', Lunch: 'Leftover Pizza', Dinner: 'Burgers (no bun)' },
    Saturday: { Breakfast: 'GF Cereal', Lunch: 'Out', Dinner: 'Steak' },
    Sunday: { Breakfast: 'GF Waffles', Lunch: 'Leftover Steak', Dinner: 'Roast Chicken' },
};


@Injectable()
export class MealPlanService {
  private readonly logger = new Logger(MealPlanService.name);

  getMealPlan(dietaryRestriction: string) {
    switch (dietaryRestriction) {
        case 'vegetarian':
            return vegetarianPlan;
        case 'gluten-free':
            return glutenFreePlan;
        default:
            return basePlan;
    }
  }

  @Cron('0 0 * * 0', { timeZone: 'Asia/Karachi' }) // Sunday at 12:00 AM PKT
  handleCron() {
    this.logger.log('Scheduled meal plan update check triggered.');
    // In a real app, you might fetch new plans or rotate them here.
  }
}
