import { Body, Controller, Get, Headers, HttpException, HttpStatus, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from 'jsonwebtoken';

@Controller('decode')
export class DecodeController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  decodeToken(@Body('token') token: string) {
    try {
      if (!token) {
        throw new HttpException('Token not provided', HttpStatus.BAD_REQUEST);
      }
      const decoded = this.authService.verifyToken(token) as JwtPayload;
      return {
        id: decoded.sub,
        username: decoded.aud,
        

      };
    } catch (error) {
      return { error: 'Invalid token' };
    }
  }
}
