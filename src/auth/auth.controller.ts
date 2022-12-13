import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, Res } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post('/login')
  async login(
    @Body() dto: UserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authServise.login(userDto);

    const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=21600; Domain=${process.env.COOKIE_DOMAIN}; SameSite=None; Secure`;
    response.setHeader('Set-Cookie', cookie);
    return { success: true };
  }
}
