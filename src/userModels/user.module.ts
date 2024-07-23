import { Module ,NestModule, MiddlewareConsumer,RequestMethod} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prismaModels/prisma.module';
import {AuthMiddleware} from "../middleware/auth";

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    
    consumer.apply(AuthMiddleware).
    forRoutes({
      path: 'users/:id/role', method: RequestMethod.PATCH
    },{
      path: 'users/:id', method: RequestMethod.DELETE
    })
  }
}

