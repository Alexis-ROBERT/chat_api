import { Body, Controller, Delete, Post, Req, Res } from '@nestjs/common';
import FriendService from './friend.service';
import FriendDemandDto from './dto/friend.demand.dto';
import FriendDeleteDto from './dto/friend.delete.dto';

@Controller('friend')
export default class FriendController {
        public constructor(
                public friend: FriendService,
                @Req() public req: Request,
                @Res() public res: Response
        ) {}

        @Post()
        public demandFriend(@Body() demandDto: FriendDemandDto): void {
                
        }

        @Delete()
        public deleteFriend(@Body() deleteDto: FriendDeleteDto) {}
}
