import {
  Controller,
  Get,
  UseGuards,
  Post,
  Put,
  Body,
  Param,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from '@prisma/client';

@Controller('auctions')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  async getActiveAuctions(): Promise<Auction[]> {
    return this.auctionService.getActiveAuctions();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createAuction(
    @Body() createAuctionDto: CreateAuctionDto,
    @Req() req,
  ): Promise<Auction> {
    const userId = req.user.userId;
    return this.auctionService.createAuction(createAuctionDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateAuction(
    @Param('id') id: string,
    @Body() updateAuctionDto: UpdateAuctionDto,
    @Req() req,
  ): Promise<Auction> {
    const userId = req.user.userId;
    return this.auctionService.updateAuction(
      Number(id),
      updateAuctionDto,
      userId,
    );
  }

  @Get(':id')
  async getAuctionById(@Param('id') id: string): Promise<Auction | null> {
    return this.auctionService.getAuctionById(Number(id));
  }
}
