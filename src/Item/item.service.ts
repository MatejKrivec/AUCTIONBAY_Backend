import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { Prisma,ITEM } from "@prisma/client";


// ////////////////////////////////////////////////////////////////////////TEST ZA CREATE PA UPDATE KO MATA DRUGACNE PARAMS
@Injectable()
export class ItemService{
    constructor(private prisma: PrismaService){}

    async getItem(Id: number): Promise<ITEM>{
        return this.prisma.iTEM.findUnique({
            where: {itemId: Id}
        })
    }

    async getItems(): Promise<ITEM[]>{
        return this.prisma.iTEM.findMany()
    }

    async createItem(itemData: ITEM): Promise<ITEM>{
        return this.prisma.iTEM.create({
            data: itemData
        })
    }

    async deleteItem(Id: number): Promise<ITEM>{
        return this.prisma.iTEM.delete({
            where: {itemId: Id}
        })
    }

    async editItem(params: {id: number, data: ITEM}): Promise<ITEM>{
        const {id, data}= params
        return this.prisma.iTEM.update({
            where: {itemId: id},
            data
        })
    }

}
