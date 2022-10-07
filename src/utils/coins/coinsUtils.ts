function formatAllCoinsData(unformatedData) {
    const result = unformatedData.data.map((coin) => {
        return {
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
                market_cap_change_24h:
                    coin.market_data.market_cap_change_24h_in_currency.usd,
                market_cap_change_percentage_24h:
                    coin.market_data
                        .market_cap_change_percentage_24h_in_currency.usd,
                high_24h: coin.market_data.high_24h.usd,
                low_24h: coin.market_data.low_24h.usd,
                price_change_24h:
                    coin.market_data.price_change_24h_in_currency.usd,
                price_change_percentage_24h:
                    coin.market_data.price_change_percentage_24h_in_currency
                        .usd,
                price_change_percentage_7d:
                    coin.market_data.price_change_percentage_7d_in_currency.usd,
                price_change_percentage_14d:
                    coin.market_data.price_change_percentage_14d_in_currency
                        .usd,
                price_change_percentage_30d:
                    coin.market_data.price_change_percentage_30d_in_currency
                        .usd,
                price_change_percentage_60d:
                    coin.market_data.price_change_percentage_60d_in_currency
                        .usd,
                price_change_percentage_200d:
                    coin.market_data.price_change_percentage_200d_in_currency
                        .usd,
                price_change_percentage_1y:
                    coin.market_data.price_change_percentage_1y_in_currency.usd,
                total_supply: coin.market_data.total_supply,
                circulating_supply: coin.market_data.circulating_supply,
            },
        };
    });
    return result;
}

function formatCoinData(unformatedData: any) {
    const {
        id,
        symbol,
        name,
        block_time_in_minutes,
        hashing_algorithm,
        description,
        links,
        image,
        genesis_date,
        market_cap_rank,
        market_data,
        community_data,
        developer_data,
    } = unformatedData;

    const data = {
        id: id,
        symbol: symbol,
        name: name,
        block_time_in_minutes: block_time_in_minutes,
        hashing_algorithm: hashing_algorithm,
        description: filterCoinDescription(description),
        links: filterCoinLinks(links),
        image: filterCoinImage(image),
        genesis_date: genesis_date,
        market_cap_rank: market_cap_rank,
        market_data: filterCoinMarketData(market_data),
        community_data: filterCoinCommunityData(community_data),
        developer_data: filterCoinDeveloperData(developer_data),
    };

    return data;
}

function filterCoinDescription(coinDescription: any) {
    return coinDescription.en;
}

function filterCoinLinks(coinLinks: any) {
    const data = {
        homepage: coinLinks.homepage[0],
        blockchain_site: coinLinks.blockchain_site[0],
        forum: coinLinks.official_forum_url[0],
        repositories: coinLinks.repos_url.github,
    };

    return data;
}

function filterCoinImage(coinImage: any) {
    return coinImage.large;
}

function filterCoinMarketData(coinMarketData: any) {
    const data = {
        current_price: coinMarketData.current_price.usd,
        ath: coinMarketData.ath.usd,
        ath_change_percentage: coinMarketData.ath_change_percentage.usd,
        ath_date: coinMarketData.ath_date.usd,
        atl: coinMarketData.atl.usd,
        atl_change_percentage: coinMarketData.atl_change_percentage.usd,
        atl_date: coinMarketData.atl_date.usd,
        market_cap_ranking: coinMarketData.market_cap_rank,
        market_cap: coinMarketData.market_cap.usd,
        market_cap_change_24h:
            coinMarketData.market_cap_change_24h_in_currency.usd,
        market_cap_change_percentage_24h:
            coinMarketData.market_cap_change_percentage_24h_in_currency.usd,
        high_24h: coinMarketData.high_24h.usd,
        low_24h: coinMarketData.low_24h.usd,
        price_change_24h: coinMarketData.price_change_24h_in_currency.usd,
        price_change_percentage_24h:
            coinMarketData.price_change_percentage_24h_in_currency.usd,
        price_change_percentage_7d:
            coinMarketData.price_change_percentage_7d_in_currency.usd,
        price_change_percentage_14d:
            coinMarketData.price_change_percentage_14d_in_currency.usd,
        price_change_percentage_30d:
            coinMarketData.price_change_percentage_30d_in_currency.usd,
        price_change_percentage_60d:
            coinMarketData.price_change_percentage_60d_in_currency.usd,
        price_change_percentage_200d:
            coinMarketData.price_change_percentage_200d_in_currency.usd,
        price_change_percentage_1y:
            coinMarketData.price_change_percentage_1y_in_currency.usd,
        total_supply: coinMarketData.total_supply,
        circulating_supply: coinMarketData.circulating_supply,
    };

    return data;
}

function filterCoinCommunityData(communityData: any) {
    delete communityData.facebook_likes;
    delete communityData.telegram_channel_user_count;

    return communityData;
}

function filterCoinDeveloperData(developerData: any) {
    delete developerData.last_4_weeks_commit_activity_series;

    return developerData;
}

const coinsUtils = {
    formatAllCoinsData,
    formatCoinData,
};

export default coinsUtils;
