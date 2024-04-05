import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { Prisma, USER } from "@prisma/client";


@Injectable()
export class UserService{
    constructor(private prisma: PrismaService){}
    
    async user(
        userWhereUniqueInput: Prisma.USERWhereUniqueInput,
      ): Promise<USER | null> {
        return this.prisma.uSER.findUnique({
          where: userWhereUniqueInput,
        });
      }
    
    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.USERWhereUniqueInput;
        where?: Prisma.USERWhereInput;
        orderBy?: Prisma.USEROrderByWithRelationInput;
      }): Promise<USER[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.uSER.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
    }

    async createUser(data: Prisma.USERCreateInput): Promise<USER> {
        return this.prisma.uSER.create({
          data,
        });
    }

    async updateUser(params: {
        where: Prisma.USERWhereUniqueInput;
        data: Prisma.USERUpdateInput;
      }): Promise<USER> {
        const { where, data } = params;
        return this.prisma.uSER.update({
          data,
          where,
        });
      }
    
      async deleteUser(where: Prisma.USERWhereUniqueInput): Promise<USER> {
        return this.prisma.uSER.delete({
          where,
        });
      }

    
}