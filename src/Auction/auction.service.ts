import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { Prisma, AUCTION } from "@prisma/client";


@Injectable()
export class AuctionService{
    constructor(private prisma: PrismaService){}

    async getAuction(Id: number): Promise<AUCTION[] | null> {
        return this.prisma.aUCTION.findMany({
            where: {userId: Id}
        })
    }

    async getAuctions(auctionId: number): Promise<AUCTION[] | null> {
        return this.prisma.aUCTION.findMany({
            where: {
                userId: {
                    not: auctionId
                }
            }
        });
    }

    async getAllAuctions(): Promise<AUCTION[]>{
        return this.prisma.aUCTION.findMany()
    }

    async deleteAuction(where: Prisma.AUCTIONWhereUniqueInput): Promise<AUCTION | null>{
        return this.prisma.aUCTION.delete({
            where,
        })
    }

    async createAuction(data: Prisma.AUCTIONCreateInput): Promise<AUCTION>{
        return this.prisma.aUCTION.create({
            data,
        })
    }

    async updateAuction(params: {where: Prisma.AUCTIONWhereUniqueInput;data: Prisma.AUCTIONUpdateInput;}): Promise <AUCTION>{
        const{where, data} = params
        return this.prisma.aUCTION.update({
            data,
            where,
        })
    }

    async patchAuction(params: { where: Prisma.AUCTIONWhereUniqueInput; data: Prisma.AUCTIONUpdateInput }): Promise<AUCTION> {
        const { where, data } = params;
        return this.prisma.aUCTION.update({
            data,
            where,
        });
    }
    
}