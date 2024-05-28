import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../../entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey', // replace 'yourSecretKey' with your actual secret key
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.userService.findOneById(payload.userId);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
