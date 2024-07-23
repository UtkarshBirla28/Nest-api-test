import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { PrismaModule } from '../prismaModels/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
