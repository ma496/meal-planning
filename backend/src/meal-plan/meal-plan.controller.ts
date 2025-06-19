import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';

interface UserPayload {
  userId: string;
  email: string;
  dietaryRestriction: string;
}

interface RequestWithUser extends Request {
  user: UserPayload;
}

@ApiTags('meal-plan')
@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get the weekly meal plan for the authenticated user' })
  getMealPlan(@Req() req: RequestWithUser) {
    const user = req.user;
    return this.mealPlanService.getMealPlan(user.dietaryRestriction);
  }
}
