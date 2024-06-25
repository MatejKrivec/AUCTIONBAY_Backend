import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { BidService } from './bid.service';
import { BID } from '@prisma/client';
import { JwtAuthGuard } from 'src/JWT/jwt-auth.guard';

@Controller('bids')
export class BidController{
    constructor(private readonly bidService: BidService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getBids(): Promise<BID[]>{
        return this.bidService.getBids()
    } 

    @Get('byAuctionId/:id')
    @UseGuards(JwtAuthGuard)
    async getBidByAuctionId(@Param('id') bidId: string): Promise<BID[] | null>{
        const id = parseInt(bidId, 10);
        return this.bidService.getBidByAuctionId(id)
    } 
    @Get('byUserId/:id')
    @UseGuards(JwtAuthGuard)
    async getBidByUserId(@Param('id') bidId: string): Promise<BID[] | null>{
        const id = parseInt(bidId, 10);
        return this.bidService.getBidByUserId(id)
    } 

    @Post()
    @UseGuards(JwtAuthGuard)
    async createBid(@Body() data: BID): Promise<BID>{
        return this.bidService.createBid(data)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteBid(@Param('id') bidId: string): Promise<BID>{
        return this.bidService.deleteBid({ bidId: Number(bidId) })
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateBid(@Param('id') bidId: string,@Body() data: BID): Promise<BID>{
        return this.bidService.editBid({
            where: { bidId: Number(bidId) },
            data: data
        })
    }



}