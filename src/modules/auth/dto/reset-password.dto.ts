import { IsNotEmpty, IsString, MinLength, ValidateIf } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsString()
  readonly token: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly newPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @ValidateIf((o) => o.newPassword === o.repeatPassword, {
    message: 'Passwords do not match',
  })
  readonly repeatPassword: string;
}
