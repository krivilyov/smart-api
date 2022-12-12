import { UserService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
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

  @Put('/user/:id')
  update(@Param('id') id: number, @Body() dto: UserDto) {
    return this.usersService.updateUser(id, dto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: number) {
    return this.usersService.removeUser(id);
  }
}
