import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role, Prisma } from '@prisma/client';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: Prisma.RoleCreateInput): Promise<Role> {
    return this.roleService.createRole(createRoleDto);
  }
     
  @Get()
  async findAll(): Promise<Role[]> {
    return this.roleService.getRoles();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Role> {
    return this.roleService.getRoleById(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Role> {
    return this.roleService.deleteRole(+id);
  }
}
