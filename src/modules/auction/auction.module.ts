import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from '../../entities/auction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
  providers: [AuctionService],
  controllers: [AuctionController],
  exports: [AuctionService],
})
export class AuctionModule {}
