import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from '../user/dto/create-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionService.create(createAuctionDto);
  }

  @Get()
  findAll() {
    return this.auctionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.auctionService.findOne(id);
  }
}
