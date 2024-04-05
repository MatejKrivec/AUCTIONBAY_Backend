import { Module } from "@nestjs/common";
import { ItemController } from "./item.controller";
import { ItemService } from "./item.service";
import { PrismaService } from "src/Prisma/prisma.service";

@Module({
    controllers: [ItemController],
    providers: [PrismaService,ItemService]
})
export class ItemModule{}