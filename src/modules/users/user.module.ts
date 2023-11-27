import { Module } from '@nestjs/common';
import UserController from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import UserService from './user.service';
import UserRepository from './user.repository';

@Module({
        imports: [MongooseModule.forFeature([{ name: 'users_data', schema: UserSchema }])],
        controllers: [UserController],
        providers: [UserService, UserRepository],
        exports: [UserService],
})
export default class UserModule {}
