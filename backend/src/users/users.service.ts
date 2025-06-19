import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly logger = new Logger(UsersService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async onModuleInit() {
    this.logger.log('Checking for default user...');
    const defaultUserEmail = 'user@example.com';
    const existingUser = await this.findOne(defaultUserEmail);

    if (!existingUser) {
      this.logger.log('Default user not found. Creating...');
      const defaultUser: CreateUserDto = {
        name: 'Default User',
        email: defaultUserEmail,
        password: 'password123', // The pre-save hook will hash this
        dietaryRestriction: 'none',
      };
      await this.create(defaultUser);
      this.logger.log('Default user created successfully.');
    } else {
      this.logger.log('Default user already exists.');
    }
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOne(email: string): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({ email }).exec();
    return user as UserDocument;
  }
}
