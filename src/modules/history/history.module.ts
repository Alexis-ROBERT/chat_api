import { Module } from '@nestjs/common';
import HistoryController from './history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { historySchema } from './history.schema';
import HistoryService from './history.service';
import HistoryRepository from './history.repository';

@Module({
        imports: [MongooseModule.forFeature([{ name: 'history_data', schema: historySchema }])],
        controllers: [HistoryController],
        providers: [HistoryService, HistoryRepository],
})
export default class HistoryModule {}
