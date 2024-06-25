import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/Prisma/prisma.service';
import { USER } from '@prisma/client';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {

  private readonly jwtSecret = process.env.JWT_TOKEN_SECRET_KEY;

  verifyToken(token: string) {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async generateToken(payload: any): Promise<string> {
    
    return this.jwtService.sign(payload);
  }

async findOneByUsernameAndPassword(username: string, password: string): Promise<USER | null> {
  return this.prisma.uSER.findUnique({
      where: {
          username: username,
          password: password
      },
  });
}

  
}