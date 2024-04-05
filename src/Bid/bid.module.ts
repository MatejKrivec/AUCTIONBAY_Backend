import { Module } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { BidController } from "./bid.controller";
import { BidService } from "./bid.service";

@Module({
    controllers: [BidController],
    providers: [PrismaService,BidService]
})
export class BidModule{}