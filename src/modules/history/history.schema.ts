import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class HistorySchemaDocument {
        @Prop({
                required: true,
        })
        public content: string;

        @Prop({
                required: true,
        })
        public link: string;
}

export const historySchema = SchemaFactory.createForClass(HistorySchemaDocument);

export default {
        HistorySchemaDocument,
        historySchema,
};
