import { Request, Response } from "express";
import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

import articleServices from "../../services/articles/articleServices";

async function create(req: Request, res: Response) {

    const type = req.params.type;
    const userInfo = res.locals.data;

    const data: createTextInterface = req.body;

    if (type === "news") {

    } else {
        await articleServices.create(data, userInfo);
    }

    res.send("Created").status(201);
}

const textController = {
    create
}

export default textController;