import { Prop, PropOptions, Schema, SchemaFactory } from '@nestjs/mongoose';

const propName: PropOptions = {
        minlength: 2,
        maxlength: 20,
        required: true,
};

@Schema()
export class UserSchemaDocument {
        @Prop(propName)
        public firstName: string;

        @Prop(propName)
        public lastName: string;

        @Prop({
                required: true,
        })
        public email: string;

        @Prop({
                required: true,
        })
        public password: string;

        @Prop({
                required: true,
        })
        public age: number;
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaDocument);

export default {
        UserSchemaDocument,
        UserSchema,
};
