import { Request, Response } from "express";
import { signUpInterface } from "../../interfaces/authInterfaces/authInterfaces";

import authServices from "../../services/auth/authServices";

async function signUp(req: Request, res: Response) {
    const data: signUpInterface = req.body;
    
    await authServices.signUp(data);

    res.send("Created").status(201);
}

const authController = {
    signUp
}

export default authController;