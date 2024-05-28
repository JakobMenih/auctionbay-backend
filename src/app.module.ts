import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsernpmModule } from './install/usernpm/usernpm.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuctionModule } from './modules/auction/auction.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      //port: 5433,
      port: 5432,
      username: 'postgres',
      //password: 'admin',
      password: 'postgres',
      database: 'auctionbay',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    AuthModule,
    AuctionModule,
    UserModule,
    UsernpmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
