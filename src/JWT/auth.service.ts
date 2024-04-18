// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/Prisma/prisma.service';
import { Prisma, USER } from '@prisma/client';
import { UserService } from 'src/User/user.service';
//import { UserService } from 'src/User/user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {

  private readonly jwtSecret = '12345';

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

  /*async validateUser(username: string, password: string): Promise<boolean> {
    // Query the user from the database based on the username and password
    const user = await this.userService.findOneByUsernameAndPassword(username, password);

    // If no user found or password doesn't match, return false
    if (!user || user.password !== password) {
        return false;
    }

    // If user found and password matches, return true
    return true;
}*/

async findOneByUsernameAndPassword(username: string, password: string): Promise<USER | null> {
  return this.prisma.uSER.findUnique({
      where: {
          username: username,
          password: password
      },
  });
}

  
}