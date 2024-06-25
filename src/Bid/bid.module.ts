import { Module } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { BidController } from "./bid.controller";
import { BidService } from "./bid.service";
import { JwtService } from "@nestjs/jwt";

@Module({
    controllers: [BidController],
    providers: [PrismaService,BidService, JwtService]
})
export class BidModule{}