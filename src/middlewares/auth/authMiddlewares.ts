import { Request, Response, NextFunction } from "express";
import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";
import authUtils from "../../utils/auth/authUtils";

function checkPasswordsEquality(req: Request, res: Response, next: NextFunction) {
    const { password, confirmedPassword }: Omit<signUpInterface, "name" | "email"> = req.body;

    if (password != confirmedPassword) {
        throw ({ type: "passwordsAreNotEqual", message: "Passwords aren't equal!" });
    }

    next();
}

function validateToken(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization;

    if(token === undefined){
        throw ({ type: "invalidToken", message: "Invalid token!" });
    }

    const data = authUtils.getTokenDataOrFail(token);

    res.locals.data = data;

    next();
}

const authMiddlewares = {
    checkPasswordsEquality,
    validateToken
}

export default authMiddlewares;