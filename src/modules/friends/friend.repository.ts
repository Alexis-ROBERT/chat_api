import { Injectable } from '@nestjs/common';
import DataRepository from '../data/data.repository';
import { FriendDocument } from './friend.type';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export default class FriendRepository extends DataRepository<FriendDocument> {
        public constructor(@InjectModel('friends_data') model: Model<FriendDocument>) {
                super(model);
        }
}