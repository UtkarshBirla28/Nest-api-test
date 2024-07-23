import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prismaModels/prisma.service';
import { User, Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService,private jwtService: JwtService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already taken');
    }

    return this.prisma.user.create({ data });
  }

  async logUser(email:string,password:string):Promise<{ access_token: string }> 
  {
       const user = await this.prisma.user.findUnique({where:{email}});
       if(user?.password!=password){
        throw new UnauthorizedException();
       }
       const payload = {key:user.email,keys:user.roleId};
       return{
        access_token:await this.jwtService.signAsync(payload)
       }

       
  }  

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async assignRole(userId: number, roleId: number): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { roleId: roleId },
    });
  }
}
