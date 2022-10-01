import { Request, Response, NextFunction, text } from "express";

function validateUrlParam(req: Request, res: Response, next: NextFunction) {

    const validParams = ["news, educational"];
    const receivedParam = req.params.type;

    if(!(receivedParam in validParams)){
        throw ({ type: "invalidParam", message: "Invalid text type!" });
    }

    next();
}

const textMiddlewares = {
    validateUrlParam
}

export default textMiddlewares;