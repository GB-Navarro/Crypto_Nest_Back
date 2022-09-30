import { Request, Response } from "express";
import { signInInterface, signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import authServices from "../../services/auth/authServices";

async function signUp(req: Request, res: Response) {
    const data: signUpInterface = req.body;
    
    await authServices.signUp(data);

    res.send("Created").status(201);
}

async function signIn(req: Request, res: Response) {
    const data: signInInterface = req.body;

    res.send("Token").status(200);
}

const authController = {
    signUp,
    signIn
}

export default authController;