import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOneById(id);
  }
}
