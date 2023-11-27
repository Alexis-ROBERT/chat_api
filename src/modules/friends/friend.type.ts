import { Document } from 'mongoose';
import { FriendSchemaDocument } from './friend.schema';
import FriendEntity from './friend.entity';
import { Body } from '@nestjs/common';
import FriendDemandDto from './dto/friend.demand.dto';
import FriendDeleteDto from './dto/friend.delete.dto';
import FriendBlockedDto from './dto/friend.blocked.dto';
import FriendAcceptDto from './dto/friend.accept.dto';
import { DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';

export interface IFriendController {
        friendAccept: (friendAcceptDto: FriendAcceptDto) => Promise<UpdateResult>;

        friendDelete: (friendDeleteDto: FriendDeleteDto) => Promise<DeleteResult>;

        friendBlocked: (friendBlockedDto: FriendBlockedDto) => Promise<UpdateResult>;

        friendDemand: (friendDemandDto: FriendDemandDto) => Promise<FriendEntity>;
}

export interface IFriendService {
        demand: (friendAcceptedDto: FriendAcceptDto) => Promise<FriendEntity>;

        delete: (friendDeleteDto: FriendDeleteDto) => Promise<DeleteResult>;

        blocked: (friendBlockedDto: FriendBlockedDto) => Promise<UpdateResult>;
}

export type FriendDocument = FriendSchemaDocument & Document;
