import { Document } from 'mongoose';
import { UserSchemaDocument } from './user.schema';
import UserEntity from './user.entity';
import UserCreateDto from './dto/user.create.dto';

export type UserDocument = UserSchemaDocument & Document;

export interface IUserService {
        create: (createUserDto: UserCreateDto) => Promise<UserEntity>;
}