import { UserService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('/api/v1/')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get('/users')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/user')
  create(@Body() dto: UserDto) {
    console.log('dto', dto);
    return this.usersService.createUser(dto);
  }
}
