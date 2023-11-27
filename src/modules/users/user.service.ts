import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserRepository from './user.repository';
import { UserDocument } from './user.type';
import UserCreateDto from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';
import UserEntity from './user.entity';
import * as crypto from 'crypto';
import Crypto from 'src/utils/crypto';

@Injectable()
export default class UserService {
        public constructor(public readonly userReposetory: UserRepository) {}

        public async create(userCreateDto: UserCreateDto): Promise<UserEntity> {
                const crypto: Crypto = new Crypto('aes-256-gcm', process.env.CRYPTO_SECRET_KEY, 16);

                userCreateDto.email = userCreateDto.email.toLowerCase();
                userCreateDto.email = (await crypto.crypt(userCreateDto.email)).result;

                if (
                        !RegExp(process.env.REGEX_MAIL as RegExp | string).test(userCreateDto.email) ||
                        !RegExp(process.env.REGEX_PASSWORD as RegExp | string).test(userCreateDto.password)
                ) {
                        throw new HttpException('The regex', HttpStatus.NOT_ACCEPTABLE);
                }

                userCreateDto.password = bcrypt.hashSync(userCreateDto.password, 12);

                await this.userReposetory
                        .find({
                                email: userCreateDto.email,
                        })
                        .then((find) => {
                                if (find.length > 0) {
                                        throw new HttpException('Email already exists', HttpStatus.FOUND);
                                }
                        })
                        .catch((err: string) => {
                                throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
                        });

                if (userCreateDto.age <= 14) throw new HttpException('', HttpStatus.NOT_ACCEPTABLE);

                return await this.userReposetory.create<UserCreateDto>(userCreateDto);
        }
}
