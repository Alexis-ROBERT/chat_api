import { Body, Controller, Delete, Get, Patch, Post, Req, Res } from '@nestjs/common';
import UserService from './user.service';
import UserCreateDto from './dto/user.create.dto';
import UserFindDto from './dto/user.find.dto';
import UserFindAllDto from './dto/user.find.all';
import UserDeleteDto from './dto/user.delete.dto';
import UserChangeDto from './dto/user.change.dto';

@Controller('user')
export default class UserController {
        public constructor(
                public user: UserService,
                @Req() public req: Request,
                @Res() public res: Response
        ) {}

        @Post()
        public userCreate(@Body() userCreateDto: UserCreateDto) {}

        @Get()
        public userFind(@Body() userFindDto: UserFindDto) {}

        @Get()
        public userFindAll(@Body() userFindAllDto: UserFindAllDto) {}

        @Patch()
        public userChange(@Body() userChangeDto: UserChangeDto) {
            
        }

        @Delete()
        public userDelete(@Body() userDelete: UserDeleteDto) {}
}
