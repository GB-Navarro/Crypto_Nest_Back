import { Request, Response } from "express";

import exampleServices from "../../services/example/exampleServices";

async function example(req: Request, res: Response) {

    exampleServices.example();

    res.sendStatus(200);
}

const exampleController = {
    example
}

export default exampleController;