import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { AuctionModule } from './modules/auction/auction.module';
import { PrismaService } from './prisma/prisma.service';
import { BidModule } from './modules/auction/bid.module';

@Module({
  imports: [AuthModule, UserModule, AuctionModule, BidModule],
  providers: [PrismaService],
})
export class AppModule {}
