import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemService } from './item.service';
import { ITEM } from '@prisma/client';

@Controller('items')
export class ItemController{
    constructor(private readonly itemService: ItemService){}

    @Get()
    async getItems(): Promise<ITEM[]>{
        return this.itemService.getItems()
    }

    @Get(':id')
    async getItem(@Param('id') itemId: number): Promise<ITEM>{
        return this.itemService.getItem(itemId)
    }

    @Post()
    async createItem(@Body() data: ITEM): Promise<ITEM>{
        return this.itemService.createItem(data)
    }

    @Delete(':id')
    async deleteItem(@Param('id') itemId: string): Promise<ITEM>{
        return this.itemService.deleteItem(Number(itemId))
    }

    @Put(':id')
    async editItem(@Param('id') itemId: string,@Body() data: ITEM): Promise<ITEM>{
        return this.itemService.editItem({
            id: Number(itemId),  
            data: data
        })
    }

    


}