import { Request, Response } from "express";
import { UserInfo } from "../../interfaces/userInterfaces/userInterfaces";

import coinsServices from "../../services/coins/coinsServices";

async function getAll(req: Request, res: Response) {

    const { userId, userName, userEmail } = res.locals.data;

    const userInfo: UserInfo = {
        id: userId,
        name: userName,
        email: userEmail
    }

    const data = await coinsServices.getAll();

    const response = {
        userInfo,
        data
    }

    res.status(200).send(response);
}

async function getById(req: Request, res: Response) {

    const { userId, userEmail, userName } = res.locals.data;

    const userInfo: UserInfo = {
        id: userId,
        name: userName,
        email: userEmail
    }

    const { id: coinId } = req.params;

    const data = await coinsServices.getById(coinId);

    const response = {
        userInfo,
        data
    }

    res.status(200).send(response);
}

const coinsController = {
    getAll,
    getById
}

export default coinsController;