import { Module } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealPlanController } from './meal-plan.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [MealPlanController],
  providers: [MealPlanService]
})
export class MealPlanModule {}
