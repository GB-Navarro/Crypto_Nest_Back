import { Request, Response } from "express";
import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

async function create(req: Request, res: Response){
    const data: createTextInterface = req.body;

    res.send("Created").status(201);
}

const textController = {
    create
}

export default textController;