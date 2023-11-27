import { Module } from "@nestjs/common";
import VideoService from "./video.service";
import VideoController from "./video.controller";
import { MongooseModule } from "@nestjs/mongoose";
import videoSchema from "./video.schema";

@Module({
        imports: [MongooseModule.forFeature([{name: 'video_data', schema: videoSchema}])],
        controllers: [VideoController],
        providers: []
})
export default class VideoModule {}