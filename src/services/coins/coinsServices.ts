import CoinGecko from "coingecko-api";
import coinsUtils from "../../utils//coins/coinsUtils";

async function getAll() {

    const CoinGeckoClient = new CoinGecko;

    const unformatedData: any = await CoinGeckoClient.coins.all();

    const data = coinsUtils.formatAllCoinsData(unformatedData);

    return data;
}

async function getById() {

    const CoinGeckoClient = new CoinGecko;

    const result: any = await CoinGeckoClient.coins.fetch('bitcoin', {});

    const data = coinsUtils.formatCoinData(result.data);
    
    return data;
}

const coinsServices = {
    getAll,
    getById
}

export default coinsServices;