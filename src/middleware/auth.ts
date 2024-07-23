import {Injectable,NestMiddleware,UnauthorizedException } from "@nestjs/common";
import {Request,Response,NextFunction} from "express";
import * as jwt from 'jsonwebtoken';
import {jwtConstants} from "../userModels/auth-constant"

@Injectable()
export class AuthMiddleware implements NestMiddleware{

    use(req:Request,res:Response,next:NextFunction)
    {
        const user = req.headers['authorization'];
        if (!user) {
            return res.status(401).json({ message: 'Authorization header missing' });
          }
          const token = user.split(' ')[1];
          const decoded = jwt.verify(token, jwtConstants.secret) as { keys?: number };

          if (!decoded.keys || decoded.keys !== 1) {
            return res.status(401).json({ message: 'User is not Admin' });
          }

        
        next();
    }
}