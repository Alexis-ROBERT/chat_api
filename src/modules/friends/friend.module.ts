import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { friendSchema } from './friend.schema';
import FriendController from './friend.controller';
import FriendService from './friend.service';
import FriendRepository from './friend.repository';

@Module({
        imports: [MongooseModule.forFeature([{ name: 'friends_data', schema: friendSchema }])],
        controllers: [FriendController],
        providers: [FriendService, FriendRepository],
})
export default class FriendModule {}