import { Controller, Post, Req, Res } from '@nestjs/common';

@Controller('authentication')
export default class AuthenticationController {
        public constructor(
                @Req() public req: Request,
                @Res() public res: Response
        ) {}

        @Post('login')
        public login(): void {}
}
