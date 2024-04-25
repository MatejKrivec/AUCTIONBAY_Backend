// your-controller.ts
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    const { username, password } = req.body;

    const user = await this.authService.findOneByUsernameAndPassword(username, password);
    if (!user) {
      return { error: 'Invalid credentials' };
    }
    const token = await this.authService.generateToken({ sub: user.id, aud: user.username});
    return { token };
  }

 @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedRoute() {

    return { route: 'me' };
  }
}
