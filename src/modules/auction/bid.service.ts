import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { Bid } from '@prisma/client';

@Injectable()
export class BidService {
  constructor(private readonly prisma: PrismaService) {}

  async createBid(
    createBidDto: CreateBidDto,
    auctionId: number,
    userId: number,
  ): Promise<Bid> {
    const auction = await this.prisma.auction.findUnique({
      where: { id: auctionId },
    });

    if (!auction) {
      throw new NotFoundException('Auction not found');
    }

    return this.prisma.bid.create({
      data: {
        ...createBidDto,
        auctionId: auction.id,
        userId: userId,
      },
    });
  }

  async getBidsByAuctionId(auctionId: number): Promise<Bid[]> {
    return this.prisma.bid.findMany({
      where: { auctionId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
