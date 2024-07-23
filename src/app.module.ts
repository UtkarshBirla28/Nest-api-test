import { Module } from '@nestjs/common';

import { UserModule } from './userModels/user.module';
import { PrismaModule } from './prismaModels/prisma.module';
import {RoleModule} from "./roleModels/role.module";

@Module({
  imports: [UserModule,PrismaModule,RoleModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
