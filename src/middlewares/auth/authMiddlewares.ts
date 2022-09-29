import { Request, Response, NextFunction } from "express";
import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

async function checkPasswordsEquality(req: Request, res: Response, next: NextFunction) {
    const { password, confirmedPassword }: Omit<signUpInterface, "name" | "email"> = req.body;

    if (password != confirmedPassword) {
        throw ({ type: "passwordsAreNotEqual", message: "Passwords aren't equal!" });
    }

    next();
}