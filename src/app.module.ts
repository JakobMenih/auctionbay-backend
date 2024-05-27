import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
import { AuthModule } from './auth/auth.module';
import { AuctionModule } from './auction/auction.module';
import { UserModule } from './user/user.module';
import { UsernpmModule } from './install/usernpm/usernpm.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'admin',
      database: 'auctionbay',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    ModuleModule,
    AuthModule,
    AuctionModule,
    UserModule,
    UsernpmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
