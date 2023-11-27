import { Injectable } from '@nestjs/common';
import DataRepository from '../data/data.repository';
import { HistoryDocument } from './history.type';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export default class HistoryRepository extends DataRepository<HistoryDocument> {
        public constructor(@InjectModel('history') historyModel: Model<HistoryDocument>) {
                super(historyModel);
        }
}
