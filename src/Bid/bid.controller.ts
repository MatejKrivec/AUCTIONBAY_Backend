import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BidService } from './bid.service';
import { BID } from '@prisma/client';
import { get } from 'http';

@Controller('bids')
export class BidController{
    constructor(private readonly bidService: BidService){}

    @Get()
    async getBids(): Promise<BID[]>{
        return this.bidService.getBids()
    } 

    @Get(':id')
    async getBid(@Param('id') bidId: string): Promise<BID[] | null>{
        const id = parseInt(bidId, 10);
        return this.bidService.getBid(id)
    } 

    @Post()
    async createBid(@Body() data: BID): Promise<BID>{
        return this.bidService.createBid(data)
    }

    @Delete(':id')
    async deleteBid(@Param('id') bidId: string): Promise<BID>{
        return this.bidService.deleteBid({ bidId: Number(bidId) })
    }

    @Put(':id')
    async updateBid(@Param('id') bidId: string,@Body() data: BID): Promise<BID>{
        return this.bidService.editBid({
            where: { bidId: Number(bidId) },
            data: data
        })
    }



}