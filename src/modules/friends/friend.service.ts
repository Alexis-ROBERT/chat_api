import { Injectable } from '@nestjs/common';
import FriendRepository from './friend.repository';
import FriendEntity from './friend.entity';
import FriendDemandDto from './dto/friend.demand.dto';
import { IFriendService } from './friend.type';
import FriendDeleteDto from './dto/friend.delete.dto';
import { DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';
import FriendBlockedDto from './dto/friend.blocked.dto';
import FriendAcceptDto from './dto/friend.accept.dto';
import FriendFindDto from './dto/friend.find.dto';
import { QueryOptions } from 'mongoose';

@Injectable()
export default class FriendService implements IFriendService {
        public constructor(public friendRepository: FriendRepository) {}

        public async demand(friendCreateDto: FriendDemandDto): Promise<FriendEntity> {
                return await this.friendRepository.create<FriendDemandDto>(friendCreateDto);
        }

        public async accept(friendAcceptDto: FriendAcceptDto): Promise<UpdateResult> {
                return await this.friendRepository.update<FriendAcceptDto>(friendAcceptDto);
        }

        public async delete(friendDeleteDto: FriendDeleteDto): Promise<DeleteResult> {
                return this.friendRepository.delete<FriendDeleteDto>(friendDeleteDto);
        }

        public async blocked(friendBlockedDto: FriendBlockedDto): Promise<UpdateResult> {
                return this.friendRepository.update<FriendBlockedDto>(friendBlockedDto);
        }

        public async find(friendFindDto: FriendFindDto): Promise<QueryOptions<FriendFindDto>> {
                return this.friendRepository.find<FriendFindDto>(friendFindDto);
        }
}
