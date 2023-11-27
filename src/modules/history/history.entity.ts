import { Entity } from 'typeorm';

@Entity()
export default class HistoryEntity {
        public content: string;
}
