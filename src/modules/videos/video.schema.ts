import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class VideoSchemaDocument {}

export const videoSchema = SchemaFactory.createForClass(VideoSchemaDocument);

export default {
        VideoSchemaDocument,
};
