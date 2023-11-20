import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config();

async function main(): Promise<void> {
        const port: number = process.env.PORT_MAIN as number & undefined;

        const app = await NestFactory.create(MainModule);
        await app.listen(port);

        Logger.log('Server started on the port: ' + port);
}

main();
