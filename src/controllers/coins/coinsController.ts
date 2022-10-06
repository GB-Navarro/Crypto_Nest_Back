import { Request, Response } from "express";

import coinsServices from "../../services/coins/coinsServices";

async function getAll(req: Request, res:Response ){
    
    const data = await coinsServices.getAll();
    
    res.status(200).send(data);
}

const coinsController = {
    getAll
}

export default coinsController;