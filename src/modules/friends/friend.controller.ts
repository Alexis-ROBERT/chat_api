import { Body, Controller, Delete, Post, Req, Res } from '@nestjs/common';
import FriendService from './friend.service';
import FriendDemandDto from './dto/friend.demand.dto';
import FriendDeleteDto from './dto/friend.delete.dto';
import { IFriendController } from './friend.type';
import FriendBlockedDto from './dto/friend.blocked.dto';
import FriendAcceptDto from './dto/friend.accept.dto';
import FriendEntity from './friend.entity';
import { DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';

@Controller('friend')
export default class FriendController implements IFriendController {
        public constructor(public friend: FriendService) {}

        public async friendAccept(@Body() friendAcceptDto: FriendAcceptDto): Promise<UpdateResult> {
                return await this.friend.accept(friendAcceptDto);
        }

        @Delete()
        public async friendDelete(@Body() friendDeleteDto: FriendDeleteDto): Promise<DeleteResult> {
                return await this.friend.delete(friendDeleteDto);
        }

        public async friendBlocked(@Body() friendBlockedDto: FriendBlockedDto): Promise<UpdateResult> {
                return this.friend.blocked(friendBlockedDto);
        }

        @Post()
        public async friendDemand(@Body() friendDemandDto: FriendDemandDto): Promise<FriendEntity> {
                return this.friend.demand(friendDemandDto);
        }
}
