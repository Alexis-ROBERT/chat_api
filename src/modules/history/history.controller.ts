import { Controller, Post } from '@nestjs/common';
import HistoryService from './history.service';
import HistoryCreateDto from './dto/history.create.dto';
import HistoryEntity from './history.entity';

@Controller('history')
export default class HistoryController {
        public constructor(public history: HistoryService) {}

        @Post()
        public async historyCreate(historyCreateDto: HistoryCreateDto): Promise<HistoryEntity> {
                return await this.history.create(historyCreateDto);
        }
}
