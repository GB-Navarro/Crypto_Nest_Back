function formatAllCoinsData(unformatedData) {
    const result = unformatedData.data.map((coin) => {
        return (
            {
                coin_info: {
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    image: coin.image.large,
                },
                market_data: {
                    current_price: coin.market_data.current_price.usd,
                    market_cap_ranking: coin.market_data.market_cap_ranking,
                    market_cap: coin.market_data.market_cap.usd,
                    market_cap_change_24h: coin.market_data.market_cap_change_24h_in_currency.usd,
                    market_cap_change_percentage_24h: coin.market_data.market_cap_change_percentage_24h_in_currency.usd,
                    high_24h: coin.market_data.high_24h.usd,
                    low_24h: coin.market_data.low_24h.usd,
                    price_change_24h: coin.market_data.price_change_24h_in_currency.usd,
                    price_change_percentage_24h: coin.market_data.price_change_percentage_24h_in_currency.usd,
                    price_change_percentage_7d: coin.market_data.price_change_percentage_7d_in_currency.usd,
                    price_change_percentage_14d: coin.market_data.price_change_percentage_14d_in_currency.usd,
                    price_change_percentage_30d: coin.market_data.price_change_percentage_30d_in_currency.usd,
                    price_change_percentage_60d: coin.market_data.price_change_percentage_60d_in_currency.usd,
                    price_change_percentage_200d: coin.market_data.price_change_percentage_200d_in_currency.usd,
                    price_change_percentage_1y: coin.market_data.price_change_percentage_1y_in_currency.usd,
                    total_supply: coin.market_data.total_supply,
                    circulating_supply: coin.market_data.circulating_supply
                }
            }
        )
    })
    return result;
}

const coinsUtils = {
    formatAllCoinsData
}

export default coinsUtils;