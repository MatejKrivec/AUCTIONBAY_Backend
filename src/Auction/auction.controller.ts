import { Controller, Get, Post, Put, Delete, Body, Param, Patch } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AUCTION } from '@prisma/client';
import { ParamsTokenFactory } from '@nestjs/core/pipes';

@Controller('auctions')
export class AuctionController{
    constructor(private readonly auctionService: AuctionService){}



    @Get('one/:id')
    async getOneAuction(@Param('id') userId: string): Promise<AUCTION | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getOneAuction(id)
    }

    @Get(':id')
    async getAuction(@Param('id') userId: string): Promise<AUCTION[] | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getAuction(id)
    }


    @Get('akcije/:id')
    async getAuctions(@Param('id') userId: string): Promise<AUCTION[] | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getAuctions(id)
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
    @Patch(':id')
    async patchAuction(@Param('id') id: string, @Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.patchAuction({
            where: { auctionId: Number(id) },
            data: auctionData,
        })
    }

}