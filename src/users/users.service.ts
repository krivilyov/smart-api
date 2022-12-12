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

    const newUser = await this.usersRepository.create({
      name: dto.name,
      email: dto.email,
      password: hashPassword,
      isActive: true,
    });
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, dto: UserDto): Promise<Users> {
    await this.usersRepository
      .createQueryBuilder()
      .update(Users)
      .set({ ...dto })
      .where('id = :id', { id: id })
      .execute();

    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    return user;
  }

  async removeUser(id: number) {
    const result = await this.usersRepository
      .createQueryBuilder('users')
      .delete()
      .from(Users)
      .where('id = :id', { id: id })
      .execute();

    if (result.affected) {
      return 'Deleted success';
    } else {
      return 'Deleted fail';
    }
  }
}
