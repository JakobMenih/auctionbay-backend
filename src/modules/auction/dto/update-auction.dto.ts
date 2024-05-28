import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateAuctionDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsNumber()
  readonly startingPrice?: number;

  @IsOptional()
  @IsNumber()
  readonly duration?: number; // duration in hours or days

  @IsOptional()
  @IsString({ each: true })
  readonly images?: string[];
}
