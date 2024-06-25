import { Module } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, JwtService ],
})
export class UserModule {}
