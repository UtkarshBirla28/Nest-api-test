import { Module } from '@nestjs/common';

import { UserModule } from './user.module';
import { PrismaModule } from './prisma.module';
import {RoleModule} from "./role.module";

@Module({
  imports: [UserModule,PrismaModule,RoleModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
