import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FriendSchemaDocument {
        @Prop({
                required: true,
        })
        public affiliate: string[];

        @Prop({
                required: true,
        })
        public statutAffiliate: string;
}

export const friendSchema = SchemaFactory.createForClass(FriendSchemaDocument);

export default {
        FriendSchemaDocument,
        friendSchema,
};
