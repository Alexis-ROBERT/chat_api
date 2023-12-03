import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import UserCreateDto from './dto/user.create.dto';
import UserFindDto from './dto/user.find.dto';
import UserFindAllDto from './dto/user.find.all';
import UserDeleteDto from './dto/user.delete.dto';
import UserChangeDto from './dto/user.change.dto';
import UserService from './user.service';
import UserEntity from './user.entity';

@Controller('user')
export default class UserController {
        public constructor(public user: UserService) {}

        @Post()
        public async userCreate(@Body() userCreateDto: UserCreateDto): Promise<UserEntity> {
                try {
                        return await this.user.create(userCreateDto);
                } catch (err) {
                        let httpError: HttpException;

                        if (err instanceof HttpException) {
                                httpError = err as HttpException;
                        } else httpError = new HttpException('Server error internal', HttpStatus.INTERNAL_SERVER_ERROR);

                        throw new HttpException(httpError.message, httpError.getStatus());
                }
        }

        @Get(':id')
        public userFind(@Body() userFindDto: UserFindDto, @Param(':id') userId: number) {}

        @Get()
        public userFindAll(@Body() userFindAllDto: UserFindAllDto) {}

        @Patch()
        public userChange(@Body() userChangeDto: UserChangeDto) {}

        @Delete()
        public userDelete(@Body() userDelete: UserDeleteDto) {}
}
