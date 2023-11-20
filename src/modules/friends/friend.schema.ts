import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FriendSchemaDocument {
        @Prop()
        public affiliate: string[];

        public statutAffiliate;
}

export const FriendSchema = SchemaFactory.createForClass(FriendSchemaDocument);

export default {
        FriendSchemaDocument,
        FriendSchema,
};
