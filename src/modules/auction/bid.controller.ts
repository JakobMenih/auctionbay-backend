import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Param,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BidService } from './bid.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { Bid } from '@prisma/client';

@Controller('auctions')
@UseGuards(AuthGuard('jwt'))
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post(':id/bid')
  async createBid(
    @Param('id') id: string,
    @Body() createBidDto: CreateBidDto,
    @Req() req,
  ): Promise<Bid> {
    const userId = req.user.userId;
    const auctionId = parseInt(id, 10);

    if (isNaN(auctionId)) {
      throw new NotFoundException('Invalid auction ID');
    }

    return this.bidService.createBid(createBidDto, auctionId, userId);
  }

  @Get(':id/bids')
  async getBidsByAuctionId(@Param('id') id: string): Promise<Bid[]> {
    const auctionId = parseInt(id, 10);

    if (isNaN(auctionId)) {
      throw new NotFoundException('Invalid auction ID');
    }

    return this.bidService.getBidsByAuctionId(auctionId);
  }
}
