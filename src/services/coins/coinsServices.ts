import { CoinInterface } from "../../interfaces/coinsInterfaces/coinsInterfaces";

import CoinGecko from "coingecko-api";
import coinsUtils from "../../utils//coins/coinsUtils";

async function getAll() {
    const CoinGeckoClient = new CoinGecko;

    const { data: unformatedData }: any = await CoinGeckoClient.coins.all();

    const data: Omit<CoinInterface, "communityData" | "developmentData"> = coinsUtils.formatAllCoinsData(unformatedData);

    return data;
}

async function getById(coinId: string) {
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