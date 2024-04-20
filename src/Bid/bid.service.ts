import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { Prisma, BID } from "@prisma/client";

@Injectable()
export class BidService{
    constructor(private prisma: PrismaService){}

    async getBid(id: number): Promise<BID[] | null>{
        return this.prisma.bID.findMany({
            where: {auctionId: id}
        })
    }

    async getBids(): Promise<BID[]>{
        return this.prisma.bID.findMany()
    }

    async createBid(data: Prisma.BIDCreateInput): Promise<BID>{
        return this.prisma.bID.create({
            data,
        })
    }
        
    async deleteBid(where: Prisma.BIDWhereUniqueInput): Promise<BID>{
        return this.prisma.bID.delete({
            where,
        })
    }

    async editBid(params: {where: Prisma.BIDWhereUniqueInput;data: Prisma.BIDUpdateInput;}): Promise<BID>{
        const{where, data}= params
        return this.prisma.bID.update({
            where,
            data
        })
    }
    
}
