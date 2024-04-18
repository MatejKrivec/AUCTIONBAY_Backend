import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
import { Prisma, USER } from "@prisma/client";


@Injectable()
export class UserService{
    findOne(username: string) {
        throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService){}
    
    /*async user(userWhereUniqueInput: Prisma.USERWhereUniqueInput,): Promise<USER | null> {
        return this.prisma.uSER.findUnique({
          where: userWhereUniqueInput,
        });
      }*/


      async findOneByUsernameAndPassword(username: string, password: string): Promise<USER | null> {
        // Retrieve the user from the database that matches the provided username and password
        const user = await this.prisma.uSER.findUnique({
          where: {
            username: username,
            password: password, // Note: Passwords should be hashed and not stored in plain text
          },
        });
      
        return user || null; // Return the found user or null if no match is found
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