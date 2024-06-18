import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from '@prisma/client';

@Injectable()
export class AuctionService {
  constructor(private readonly prisma: PrismaService) {}

  async createAuction(
    createAuctionDto: CreateAuctionDto,
    userId: number,
  ): Promise<Auction> {
    return this.prisma.auction.create({
      data: {
        ...createAuctionDto,
        userId: userId,
      },
    });
  }

  async getActiveAuctions(): Promise<Auction[]> {
    const now = new Date();
    const auctions = await this.prisma.auction.findMany({
      where: {
        endDate: {
          gt: now,
        },
      },
      orderBy: {
        endDate: 'asc',
      },
    });
    console.log('Retrieved auctions:', auctions);
    return auctions;
  }

  async updateAuction(
    id: number,
    updateAuctionDto: UpdateAuctionDto,
    userId: number,
  ): Promise<Auction> {
    const auction = await this.prisma.auction.findUnique({
      where: { id },
    });

    if (!auction || auction.userId !== userId) {
      throw new ForbiddenException('You can only update your own auctions');
    }

    return this.prisma.auction.update({
      where: { id },
      data: {
        ...updateAuctionDto,
      },
    });
  }

  async getAuctionById(id: number): Promise<Auction | null> {
    return this.prisma.auction.findUnique({
      where: { id },
    });
  }
}
