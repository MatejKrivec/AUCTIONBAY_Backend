import { Module } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';

@Module({
    controllers: [AuctionController],
    providers: [PrismaService,AuctionService]
})
export class AuctionModule {}