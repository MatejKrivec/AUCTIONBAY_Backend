import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { USER } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<USER | null> {
    return this.userService.user({ id: Number(id) });
  }

  @Get()
  async getUsers(): Promise<USER[]> {
    return this.userService.users({});
  }

  @Post()
  async createUser(@Body() userData: USER): Promise<USER> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: USER,
  ): Promise<USER> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<USER> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
