import { IsEmail, IsString, MinLength, IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' }) @IsString() @IsNotEmpty() name: string;
  @ApiProperty({ example: 'john.doe@example.com' }) @IsEmail() email: string;
  @ApiProperty({ example: 'password123', minLength: 6 }) @IsString() @MinLength(6) password: string;
  @ApiProperty({ enum: ['none', 'vegetarian', 'gluten-free'] }) @IsIn(['none', 'vegetarian', 'gluten-free']) dietaryRestriction: string;
} 