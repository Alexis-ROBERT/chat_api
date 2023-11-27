import { Module } from '@nestjs/common';
import UserModule from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import DataModule from './modules/data/data.module';
import AuthenticationModule from './modules/authentication/authentication.module';
import * as dotenv from 'dotenv';
import path from 'path';
import MessageModule from './modules/messages/message.module';
import SocketModule from './/modules/socket/soket.module';
import ResourceModule from './modules/resources/resource.module';
import FriendModule from './modules/friends/friend.module';
import HistoryModule from './modules/history/history.module';

dotenv.config();

@Module({
        imports: [
                ConfigModule.forRoot({
                        isGlobal: true,
                        envFilePath: process.cwd() + '/.env',
                }),
                /* HistoryModule,
                AuthenticationModule, */
                DataModule,
                FriendModule, /*
                MessageModule, /*
                ResourceModule,
                SocketModule, */
                UserModule,
        ],
})
export class MainModule {}
