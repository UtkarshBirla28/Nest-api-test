import { Module ,NestModule, MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from './prisma.module';
// import {AuthMiddleware} from "./auth";

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule{}
