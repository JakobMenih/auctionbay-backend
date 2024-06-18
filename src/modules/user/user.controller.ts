import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('me')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('update-password')
  async updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @Req() req,
  ) {
    const userId = req.user.userId;
    await this.userService.updatePassword(userId, updatePasswordDto);
    return { message: 'Password updated successfully' };
  }
}
