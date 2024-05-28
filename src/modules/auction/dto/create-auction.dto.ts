import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAuctionDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly startingPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly duration: number; // duration in hours or days

  @IsString({ each: true })
  readonly images: string[];
}
