import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { AuctionModule } from './Auction/auction.module';
import { BidModule } from './Bid/bid.module';
import { ItemModule } from './Item/item.module';

@Module({
  imports: [UserModule,AuctionModule,BidModule,ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
