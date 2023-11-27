import { Injectable } from '@nestjs/common';
import HistoryRepository from './history.repository';
import HistoryEntity from './history.entity';
import HistoryCreateDto from './dto/history.create.dto';

@Injectable()
export default class HistoryService {
        public constructor(public historyRepository: HistoryRepository) {}

        public async create(historyCreateDto: HistoryCreateDto): Promise<HistoryEntity> {
                return await this.historyRepository.create<HistoryCreateDto>(historyCreateDto);
        }
}
