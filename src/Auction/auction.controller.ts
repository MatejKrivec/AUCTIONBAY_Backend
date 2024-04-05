import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AUCTION } from '@prisma/client';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

@Controller('auctions')
export class AuctionController{
    constructor(private readonly auctionService: AuctionService){}


    @Get(':id')
    async getAuction(@Param('id') auctionId: number): Promise<AUCTION | null>{
        return this.auctionService.getAuction(auctionId)
    }


    @Get()
    async getAllAuctions(): Promise<AUCTION[]>{
        return  this.auctionService.getAllAuctions()
    }

    @Post()
    async postAuction(@Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.createAuction(auctionData)
    }

    @Delete(':id')
    async deleteAuction(@Param('id') id: string): Promise<AUCTION>{
        return this.auctionService.deleteAuction({ auctionId: Number(id) })
    }

    @Put(':id')
    async updateAuction(@Param('id') id: string, @Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.updateAuction({
            where: { auctionId: Number(id) },
            data: auctionData,
        })
    }

}