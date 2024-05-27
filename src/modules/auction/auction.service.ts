import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auction } from '../../entities/auction.entity';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction)
    private auctionRepository: Repository<Auction>,
  ) {}

  create(createAuctionDto: CreateAuctionDto): Promise<Auction> {
    const auction = this.auctionRepository.create(createAuctionDto);
    return this.auctionRepository.save(auction);
  }

  findAll(): Promise<Auction[]> {
    return this.auctionRepository.find({ relations: ['user', 'bids'] });
  }

  findOne(id: number): Promise<Auction> {
    return this.auctionRepository.findOne(id, { relations: ['user', 'bids'] });
  }
}
