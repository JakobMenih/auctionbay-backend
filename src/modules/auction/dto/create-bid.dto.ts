import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBidDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
