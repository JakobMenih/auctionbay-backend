import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';

@Module({
  providers: [AuctionService],
  controllers: [AuctionController],
})
export class AuctionModule {}
