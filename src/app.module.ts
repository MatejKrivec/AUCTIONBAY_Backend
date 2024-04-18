import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { AuctionModule } from './Auction/auction.module';
import { BidModule } from './Bid/bid.module';
import { AuthModule } from './JWT/auth.module';


@Module({
  imports: [UserModule,AuctionModule,BidModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
