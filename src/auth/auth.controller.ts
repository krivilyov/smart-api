import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post, Res } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { Response } from 'express';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post('/login')
  async login(
    @Body() dto: UserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authServise.login(dto);
    console.log('dto', dto);
    const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=21600; Domain=${process.env.COOKIE_DOMAIN}; SameSite=None; Secure`;
    response.setHeader('Set-Cookie', cookie);
    return { success: true };
  }

  @Post('/logout')
  logout(@Res({ passthrough: true }) response: Response) {
    const cookie = `token='empty'; HttpOnly; Path=/; Max-Age=0; Domain=${process.env.COOKIE_DOMAIN}; SameSite=None; Secure`;
    response.setHeader('Set-Cookie', cookie);
    return { success: true };
  }
}
