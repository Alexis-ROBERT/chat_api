import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MessageSchemaDocument {
        @Prop({
                required: true,
                minlength: 1,
                maxlength: 5000,
        })
        public content: string;

        @Prop({
            required: true,
            minlength: 1,
        })
        public affiliate: string;
}

export const MessageSchema = SchemaFactory.createForClass(MessageSchemaDocument);

export default {
        MessageSchemaDocument,
        MessageSchema
};
