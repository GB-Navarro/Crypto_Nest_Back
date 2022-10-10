import { CoinInterface } from "../../interfaces/coinsInterfaces/coinsInterfaces";

import CoinGecko from "coingecko-api";
import coinsUtils from "../../utils//coins/coinsUtils";
import authServices from "../auth/authServices";

async function getAll(token: string) {

    await authServices.checkIfTokenIsBlocked(token);

    const CoinGeckoClient = new CoinGecko;

    const { data: unformatedData }: any = await CoinGeckoClient.coins.all();

    const data: Omit<CoinInterface, "communityData" | "developmentData"> = coinsUtils.formatAllCoinsData(unformatedData);

    return data;
}

async function getById(coinId: string, token: string) {

    await authServices.checkIfTokenIsBlocked(token);

    const CoinGeckoClient = new CoinGecko;

    const result: any = await CoinGeckoClient.coins.fetch(coinId, {});

    if (result.code === 404) {
        throw ({ type: "coinIdDoNotExist", message: result.data.error });
    }

    const data: CoinInterface = coinsUtils.formatCoinData(result.data);

    return data;
}

const coinsServices = {
    getAll,
    getById
}

export default coinsServices;