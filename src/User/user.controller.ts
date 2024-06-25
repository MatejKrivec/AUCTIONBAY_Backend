import { Controller, Get, Post, Put, Delete, Body, Param, Query, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { USER } from '@prisma/client';
import { JwtAuthGuard } from 'src/JWT/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

 /* @Get(':id')
  async getUser(@Param('id') id: string): Promise<USER | null> {
    return this.userService.user({ id: Number(id) });
  }*/

  @Get('login') 
  async login(@Query('username') username: string,@Query('password') password: string): Promise<USER | null> {

    const user = await this.userService.findOneByUsernameAndPassword(username, password);

    return user;
}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUsers(): Promise<USER[]> {
    return this.userService.users({});
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') ID: string): Promise<USER> {
    const id = parseInt(ID, 10);
    return this.userService.getUserById(id);
  }

  @Post('validatePassword/:id')
  @UseGuards(JwtAuthGuard)
  async validatePassword(@Param('id') ID: string, @Body() body: { currentPassword: string }): Promise<boolean> {
  const id = parseInt(ID, 10);
  return this.userService.validatePassword(id, body.currentPassword);
}

 

  @Post()
  async createUser(@Body() userData: USER): Promise<USER> {
    return this.userService.createUser(userData);
  }

  /*@Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: USER,
  ): Promise<USER> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }*/

  @Patch('posodobitev/:id') 
  @UseGuards(JwtAuthGuard)
  async posodobitevUser(
    @Param('id') id: string,
    @Body() userData: USER,
  ): Promise<USER> {
    return this.userService.posodobitevUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<USER> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
