import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './message.schema';
import MessageController from './message.controller';
import MessageService from './message.service';

@Module({
        imports: [MongooseModule.forFeature([{ name: 'message_data', schema: MessageSchema }])],
        controllers: [MessageController],
        providers: [MessageService],
})
export default class MessageModule {}
