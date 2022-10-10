import { Request, Response } from "express";

import coinsServices from "../../services/coins/coinsServices";

async function getAll(req: Request, res: Response) {

    const { token } = res.locals.data;

    const data = await coinsServices.getAll(token);

    res.status(200).send(data);
}

async function getById(req: Request, res: Response) {

    const { token } = res.locals.data;

    const { id: coinId } = req.params;

    const data = await coinsServices.getById(coinId,token);

    res.status(200).send(data);
}

const coinsController = {
    getAll,
    getById
}

export default coinsController;