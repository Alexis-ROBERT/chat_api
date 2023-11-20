import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendSchema } from './friend.schema';
import FriendController from './friend.controller';
import FriendService from './friend.service';

@Module({
        imports: [MongooseModule.forFeature([{ name: 'friends_data', schema: FriendSchema }])],
        controllers: [FriendController],
        providers: [FriendService]
})
export default class FriendModule {}
