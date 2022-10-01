import { Request, Response } from "express";
import { userInfoInterface } from "../../interfaces/userInterfaces/userInterfaces";
import { createTextInterface } from "../../interfaces/textInterfaces/textInterfaces";

import newsServices from "../../services/news/newsServices";
import articleServices from "../../services/articles/articleServices";

async function create(req: Request, res: Response) {

    const data: createTextInterface = req.body;

    const type: string = req.params.type;
    const userInfo: userInfoInterface = res.locals.data;

    if (type === "news") {
        await newsServices.create(data, userInfo);
    } else {
        await articleServices.create(data, userInfo);
    }

    res.send("Created").status(201);
}

const textController = {
    create
}

export default textController;