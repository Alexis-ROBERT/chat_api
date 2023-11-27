import { Document } from 'mongoose';
import { UserSchemaDocument } from './user.schema';

export type UserDocument = UserSchemaDocument & Document;