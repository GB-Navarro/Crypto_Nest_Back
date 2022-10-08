import { Request, Response } from "express";

import coinsServices from "../../services/coins/coinsServices";

async function getAll(req: Request, res: Response) {
    const data = await coinsServices.getAll();

    res.status(200).send(data);
}

async function getById(req: Request, res: Response) {
    const { id: coinId } = req.params;

    const data = await coinsServices.getById(coinId);

    res.status(200).send(data);
}

const coinsController = {
    getAll,
    getById
}

export default coinsController;