import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction){

    if(error.type === "passwordsAreNotEqual"){
        return res.status(404).send(error.message);
    }
    return res.sendStatus(500);
}