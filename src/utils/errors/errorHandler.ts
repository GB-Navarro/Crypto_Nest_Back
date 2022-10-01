import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {

    if (error.type === "userDoNotExist" || error.type === "wrongPassword" || error.type === "invalidToken") {
        return res.status(401).send(error.message);
    }
    if (error.type === "passwordsAreNotEqual" || error.type === "categoryDoNotExist") {
        return res.status(404).send(error.message);
    }
    if (error.type === "emailAlreadyExist") {
        return res.status(409).send(error.message);
    }

    console.log(error);

    return res.sendStatus(500);
}