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
        const user = await this.prisma.uSER.findUnique({
          where: {
            username: username,
            password: password, 
          },
        });
      
        return user || null; 
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

    async getUserById(id: number): Promise<USER> {
      return this.prisma.uSER.findUnique({ where: { id } });
    }

    async validatePassword(id: number, currentPassword: string): Promise<boolean> {
      const user = await this.prisma.uSER.findUnique({ where: { id } });
      if (user) {
        const isPasswordValid = (currentPassword === user.password);
        return isPasswordValid;
      } else {
        console.error('User not found'); 
        return false; 
      }
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

      async posodobitevUser(params: {
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

function compare(currentPassword: string, password: string) {
  throw new Error("Function not implemented.");
}
