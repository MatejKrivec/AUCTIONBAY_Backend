// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/Prisma/prisma.service';
import { DecodeController } from './decode.controller';


@Module({
  imports: [
    JwtModule.register({
      secret: '12345', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AuthService, JwtStrategy, PrismaService],
  controllers: [AuthController, DecodeController],
  exports: [AuthService],
})
export class AuthModule {}