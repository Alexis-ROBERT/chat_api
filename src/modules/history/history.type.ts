import { Document } from 'mongoose';
import { HistorySchemaDocument } from './history.schema';

export type HistoryDocument = HistorySchemaDocument & Document;