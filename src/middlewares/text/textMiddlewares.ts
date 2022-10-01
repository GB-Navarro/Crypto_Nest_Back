import { Request, Response, NextFunction, text } from "express";

function validateUrlParam(req: Request, res: Response, next: NextFunction) {

    const validParams = ["news", "educational"];
    const receivedParam = req.params.type;

    const isValid = validParams.find((element) => element == receivedParam);

    if(!(isValid)){
        throw ({ type: "invalidParam", message: "Invalid text type!" });
    }

    next();
}

const textMiddlewares = {
    validateUrlParam
}

export default textMiddlewares;