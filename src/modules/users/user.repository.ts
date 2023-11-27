import { InjectModel } from '@nestjs/mongoose';
import DataRepository from '../data/data.repository';
import { UserDocument } from './user.type';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository extends DataRepository<UserDocument> {
        public constructor(@InjectModel('users_data') model: Model<UserDocument>) {
                super(model);
        }
}
