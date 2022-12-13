import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { Users } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private userServise: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: UserDto) {
    const user = await this.validateUser(dto);

    // return await this.generateToken(user: Users);
  }

  private async validateUser(dto: UserDto) {
    const user = await this.userServise.getUserByEmail(dto.email);
  }

  private async generateToken(user: Users) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    };
    return this.jwtService.sign(payload);
  }
}
