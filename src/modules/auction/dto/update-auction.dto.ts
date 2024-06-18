import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateAuctionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;
}
