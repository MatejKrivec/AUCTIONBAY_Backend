import { Controller, Get, Post, Put, Delete, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AUCTION } from '@prisma/client';
import { JwtAuthGuard } from 'src/JWT/jwt-auth.guard';

@Controller('auctions')
export class AuctionController{
    constructor(private readonly auctionService: AuctionService){}



    @Get('one/:id')
    @UseGuards(JwtAuthGuard)
    async getOneAuction(@Param('id') userId: string): Promise<AUCTION | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getOneAuction(id)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getAuction(@Param('id') userId: string): Promise<AUCTION[] | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getAuction(id)
    }


    @Get('akcije/:id')
    @UseGuards(JwtAuthGuard)
    async getAuctions(@Param('id') userId: string): Promise<AUCTION[] | null>{
        const id = parseInt(userId, 10);
        return this.auctionService.getAuctions(id)
    }


    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllAuctions(): Promise<AUCTION[]>{
        return  this.auctionService.getAllAuctions()
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async postAuction(@Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.createAuction(auctionData)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteAuction(@Param('id') id: string): Promise<AUCTION>{
        return this.auctionService.deleteAuction({ auctionId: Number(id) })
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateAuction(@Param('id') id: string, @Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.updateAuction({
            where: { auctionId: Number(id) },
            data: auctionData,
        })
    }
    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    async patchAuction(@Param('id') id: string, @Body() auctionData: AUCTION): Promise<AUCTION>{
        return this.auctionService.patchAuction({
            where: { auctionId: Number(id) },
            data: auctionData,
        })
    }

}