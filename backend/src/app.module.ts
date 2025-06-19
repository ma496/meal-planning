import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MealPlanModule } from './meal-plan/meal-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/meal-planner'),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    MealPlanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
