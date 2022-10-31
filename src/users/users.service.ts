import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async createUser(dto: UserDto): Promise<Users> {
    const hashPassword = await bcrypt.hash(dto.password, 6);
    console.log(dto);
    // const user = await this.usersRepository.create({
    //   ...dto,
    //   password: hashPassword,
    // });
    return null;
  }
}
