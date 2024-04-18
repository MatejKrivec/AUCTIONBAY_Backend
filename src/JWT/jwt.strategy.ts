// jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '12345', // Same secret key as in AuthModule
    });
  }

  async validate(payload: any) {
    // Here you can perform additional checks, like checking if the user exists in the database
    // This method will be called after the token has been verified
    return { id: payload.sub, username: payload.username };
  }
}