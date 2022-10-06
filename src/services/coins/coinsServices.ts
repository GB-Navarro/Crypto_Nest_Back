import CoinGecko from "coingecko-api";
import coinsUtils from "../../utils//coins/coinsUtils";

async function getAll() {

    const CoinGeckoClient = new CoinGecko;

    const unformatedData: any = await CoinGeckoClient.coins.all();

    const data = coinsUtils.formatAllCoinsData(unformatedData);

    return data;
}

const coinsServices = {
    getAll
}

export default coinsServices;