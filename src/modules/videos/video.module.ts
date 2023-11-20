import { Module } from "@nestjs/common";
import VideoService from "./video.service";

@Module({
        controllers: [VideoService],
        providers: []
})
export default class VideoModule {}