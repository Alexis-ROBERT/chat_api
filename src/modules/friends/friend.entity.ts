import { IsArray, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export default class FriendEntity {
        @IsArray()
        public affiliate: string[];
}
