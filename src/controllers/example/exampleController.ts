import { Request, Response } from "express";

async function example(req: Request, res: Response){
    console.log("a");
    res.sendStatus(200);
}

const exampleController = {
    example
}

export default exampleController;