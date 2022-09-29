import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction){

    if(error.type === "passwordsAreNotEqual"){
        return res.send(error.message).status(404);
    }
    return res.sendStatus(500);
}