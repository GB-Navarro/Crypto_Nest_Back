import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
    const data = req.body;

    res.send("Created").status(201);
}

const authController = {
    signUp
}

export default authController;