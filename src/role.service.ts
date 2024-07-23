import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Role, Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({ data });
  }

  async getRoles(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  async getRoleById(id: number): Promise<Role> {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async deleteRole(id: number): Promise<Role> {
    return this.prisma.role.delete({ where: { id } });
  }
}
