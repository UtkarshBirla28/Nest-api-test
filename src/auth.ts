// import {Injectable,NestMiddleware,UnauthorizedException } from "@nestjs/common";
// import {Request,Response,NextFunction} from "express";

// @Injectable()
// export class AuthMiddleware implements NestMiddleware{

//     use(req:Request,res:Response,next:NextFunction)
//     {
//         const user = req.headers; 

//         if(user['role']!== "admin")
//         {
//          throw new UnauthorizedException('You do not have the necessary permissions to perform this action.');
//         }
    
//         next();
//     }
// }