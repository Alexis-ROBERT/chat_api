import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserRepository from './user.repository';
import { IUserService, UserDocument } from './user.type';
import UserCreateDto from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';
import UserEntity from './user.entity';
import * as crypto from 'crypto';
import Crypto from 'src/utils/crypto';

@Injectable()
export default class UserService implements IUserService {
        public constructor(public readonly userReposetory: UserRepository) {}

        public async create(userCreateDto: UserCreateDto): Promise<UserEntity> {
                userCreateDto.email = userCreateDto.email.toLowerCase();

                if (
                        !RegExp(process.env.REGEX_MAIL as RegExp | string).test(userCreateDto.email) ||
                        !RegExp(process.env.REGEX_PASSWORD as RegExp | string).test(userCreateDto.password)
                )
                        throw new HttpException('The regex', HttpStatus.NOT_ACCEPTABLE);

                userCreateDto.password = bcrypt.hashSync(userCreateDto.password, 10);

                const verify: {} = {
                        email: userCreateDto.email,
                        username: userCreateDto.username,
                };

                for (const [key, value] of Object.entries(verify)) {
                        await this.userReposetory
                                .find({
                                        [key]: value,
                                })
                                .then((find) => {
                                        if (find.length > 0) {
                                                throw new HttpException(
                                                        key.split(', ').map((k, i) => {
                                                                console.log(i);
                                                                if (i === 0) return k.toLocaleUpperCase();
                                                                return k;
                                                        }) + ' already exists.',
                                                        HttpStatus.FOUND
                                                );
                                        }

                                        console.log('s')
                                })
                                .catch((err: string) => {
                                        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
                                });
                }

                if (userCreateDto.age <= 14) throw new HttpException('', HttpStatus.NOT_ACCEPTABLE);

                return await this.userReposetory.create<UserCreateDto>(userCreateDto);
        }
}
