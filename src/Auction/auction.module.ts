import { Module } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    controllers: [AuctionController],
    providers: [PrismaService,AuctionService, JwtService]
})
export class AuctionModule {}