import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
import {CreateUserDto} from "../create-user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(+id);
  }

  @Patch(':id/role/:roleId')
  async assignRole(@Param('id') id: string, @Param('roleId') roleId: string): Promise<User> {
    return this.userService.assignRole(+id, +roleId);
  }
}
