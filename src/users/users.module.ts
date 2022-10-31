import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([Users])],
})
export class UsersModule {}
