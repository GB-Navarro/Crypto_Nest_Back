import { CoinInterface, CoinInfo, CoinMarketData, UnformattedCoinImages, UnformattedCoinDescriptions, UnformattedCoinLinks, CoinCommunityData, CoinDevelopmentData } from "../../interfaces/coinsInterfaces/coinsInterfaces";

function formatAllCoinsData(unformatedData: any): Omit<CoinInterface, "communityData" | "developmentData"> {
    const result: Omit<CoinInterface, "communityData" | "developmentData"> = unformatedData.map((coin: any) => {

        const { market_data: marketData } = coin;

        const {
            current_price: currentPrice,
            high_24h: high24h,
            low_24h: low24h,
            market_cap_rank: marketCapRank,
            market_cap: marketCap,
            market_cap_change_24h_in_currency: marketCapChange24h,
            market_cap_change_percentage_24h_in_currency: marketCapChangePercentage24h,
            price_change_24h_in_currency: priceChange24h,
            price_change_percentage_24h_in_currency: priceChangePercentage24h,
            price_change_percentage_7d_in_currency: priceChangePercentage7d,
            price_change_percentage_14d_in_currency: priceChangePercentage14d,
            price_change_percentage_30d_in_currency: priceChangePercentage30d,
            price_change_percentage_60d_in_currency: priceChangePercentage60d,
            price_change_percentage_200d_in_currency: priceChangePercentage200d,
            price_change_percentage_1y_in_currency: priceChangePercentage1y,
            total_supply: totalSupply,
            circulating_supply: circulatingSupply
        } = marketData;

        return {
            coinInfo: formatCoinInfo(coin.id, coin.symbol, coin.name, coin.image),
            coinMarketData: formatCoinMarketData(
                currentPrice.usd,
                high24h.usd,
                low24h.usd,
                marketCapRank,
                marketCap.usd,
                marketCapChange24h.usd,
                marketCapChangePercentage24h.usd,
                priceChange24h.usd,
                priceChangePercentage24h.usd,
                priceChangePercentage7d.usd,
                priceChangePercentage14d.usd,
                priceChangePercentage30d.usd,
                priceChangePercentage60d.usd,
                priceChangePercentage200d.usd,
                priceChangePercentage1y.usd,
                totalSupply,
                circulatingSupply
            )
        };
    });

    return result;
}

function formatCoinData(unformatedData: any): CoinInterface {

    const {
        id,
        symbol,
        name,
        block_time_in_minutes: blockTimeInMinutes,
        hashing_algorithm: hashingAlgorithm,
        description,
        links,
        image,
        genesis_date: genesisDate,
        market_data: marketData,
        community_data: communityData,
        developer_data: developmentData,
    } = unformatedData;

    const {
        current_price: currentPrice,
        high_24h: high24h,
        low_24h: low24h,
        market_cap_rank: marketCapRank,
        market_cap: marketCap,
        market_cap_change_24h_in_currency: marketCapChange24h,
        market_cap_change_percentage_24h_in_currency: marketCapChangePercentage24h,
        price_change_24h_in_currency: priceChange24h,
        price_change_percentage_24h_in_currency: priceChangePercentage24h,
        price_change_percentage_7d_in_currency: priceChangePercentage7d,
        price_change_percentage_14d_in_currency: priceChangePercentage14d,
        price_change_percentage_30d_in_currency: priceChangePercentage30d,
        price_change_percentage_60d_in_currency: priceChangePercentage60d,
        price_change_percentage_200d_in_currency: priceChangePercentage200d,
        price_change_percentage_1y_in_currency: priceChangePercentage1y,
        total_supply: totalSupply,
        circulating_supply: circulatingSupply,
        ath,
        ath_change_percentage: athChangePercentage,
        ath_date: athDate,
        atl,
        atl_change_percentage: atlChangePercentage,
        atl_date: atlDate
    } = marketData;

    const {
        twitter_followers: twitterFollowers,
        reddit_average_posts_48h: redditAveragePosts48h,
        reddit_average_comments_48h: redditAverageComments48h,
        reddit_subscribers: redditSubscribers,
        reddit_accounts_active_48: redditAccountsActive48h } = communityData

    const {
        forks,
        stars,
        subscribers,
        total_issues: totalIssues,
        closed_issues: closedIssues,
        pull_requests_merged: pullRequestsMerged,
        pull_request_contributors: pullRequestContributors,
        code_additions_deletions_4_weeks: codeAdditionsDeletions4Weeks,
        commit_count_4_weeks: commitCount4Weeks,
    } = developmentData

    const data = {
        coinInfo: formatCoinInfo(
            id,
            symbol,
            name,
            image,
            description,
            links,
            blockTimeInMinutes,
            hashingAlgorithm,
            genesisDate
        ),
        coinMarketData: formatCoinMarketData(
            currentPrice.usd,
            high24h.usd,
            low24h.usd,
            marketCapRank,
            marketCap.usd,
            marketCapChange24h.usd,
            marketCapChangePercentage24h.usd,
            priceChange24h.usd,
            priceChangePercentage24h.usd,
            priceChangePercentage7d.usd,
            priceChangePercentage14d.usd,
            priceChangePercentage30d.usd,
            priceChangePercentage60d.usd,
            priceChangePercentage200d.usd,
            priceChangePercentage1y.usd,
            totalSupply,
            circulatingSupply,
            ath.usd,
            athChangePercentage.usd,
            athDate.usd,
            atl.usd,
            atlChangePercentage.usd,
            atlDate.usd
        ),
        coinCommunityData: formatCoinCommunityData(
            twitterFollowers,
            redditAveragePosts48h,
            redditAverageComments48h,
            redditSubscribers,
            redditAccountsActive48h
        ),
        coinDevelopmentData: formatCoinDevelopmentData(
            forks,
            stars,
            subscribers,
            totalIssues,
            closedIssues,
            pullRequestsMerged,
            pullRequestContributors,
            codeAdditionsDeletions4Weeks,
            commitCount4Weeks
        )
    };

    return data;
}

function formatCoinInfo(
    id: string,
    symbol: string,
    name: string,
    images: UnformattedCoinImages,
    description?: UnformattedCoinDescriptions,
    links?: UnformattedCoinLinks,
    blockTimeInMinutes?: number,
    hashingAlgorithm?: number,
    genesisDate?: string
): CoinInfo {

    const { large: largeImage } = images;

    if ((description === undefined) || links === undefined || blockTimeInMinutes === undefined || hashingAlgorithm === undefined || genesisDate === undefined) {
        const coinInfo: CoinInfo = {
            id: id,
            symbol: symbol,
            name: name,
            image: largeImage
        }

        return coinInfo;
    } else {

        const { en: englishDescription } = description;
        const { homepage, blockchain_site: blockchainSite, official_forum_url: officialForum, repos_url: repositories } = links

        const coinInfo: CoinInfo = {
            id: id,
            symbol: symbol,
            name: name,
            image: largeImage,
            description: englishDescription,
            links: {
                homepage: removeVoidsElements(homepage),
                blockchainSite: removeVoidsElements(blockchainSite),
                forum: removeVoidsElements(officialForum),
                repositories: removeVoidsElements(repositories.github)
            },
            blockTimeInMinutes: blockTimeInMinutes,
            hashingAlgorithm: hashingAlgorithm,
            genesisDate: genesisDate
        }

        return coinInfo;
    }
}

function removeVoidsElements(array: string[]): string[] {
    return array.filter((element) => element != "");
}

function formatCoinMarketData(
    currentPrice: number,
    high24h: number,
    low24h: number,
    marketCapRank: number,
    marketCap: number,
    marketCapChange24h: number,
    marketCapChangePercentage24h: number,
    priceChange24h: number,
    priceChangePercentage24h: number,
    priceChangePercentage7d: number,
    priceChangePercentage14d: number,
    priceChangePercentage30d: number,
    priceChangePercentage60d: number,
    priceChangePercentage200d: number,
    priceChangePercentage1y: number,
    totalSupply: string,
    circulatingSupply: string,
    ath?: number,
    athChangePercentage?: number,
    athDate?: string,
    atl?: number,
    atlChangePercentage?: number,
    atlDate?: string,
): CoinMarketData {

    if (
        ath === undefined ||
        athChangePercentage === undefined ||
        athDate === undefined ||
        atl === undefined ||
        atlChangePercentage === undefined ||
        atlDate === undefined
    ) {
        const data: CoinMarketData = {
            currentPrice: currentPrice,
            high24h: high24h,
            low24h: low24h,
            marketCapRank: marketCapRank,
            marketCap: marketCap,
            marketCapChange24h: marketCapChange24h,
            marketCapChangePercentage24h: marketCapChangePercentage24h,
            priceChange24h: priceChange24h,
            priceChangePercentage24h: priceChangePercentage24h,
            priceChangePercentage7d: priceChangePercentage7d,
            priceChangePercentage14d: priceChangePercentage14d,
            priceChangePercentage30d: priceChangePercentage30d,
            priceChangePercentage60d: priceChangePercentage60d,
            priceChangePercentage200d: priceChangePercentage200d,
            priceChangePercentage1y: priceChangePercentage1y,
            totalSupply: totalSupply,
            circulatingSupply: circulatingSupply
        }

        return data;
    } else {
        const data: CoinMarketData = {
            currentPrice: currentPrice,
            high24h: high24h,
            low24h: low24h,
            marketCapRank: marketCapRank,
            marketCap: marketCap,
            marketCapChange24h: marketCapChange24h,
            marketCapChangePercentage24h: marketCapChangePercentage24h,
            priceChange24h: priceChange24h,
            priceChangePercentage24h: priceChangePercentage24h,
            priceChangePercentage7d: priceChangePercentage7d,
            priceChangePercentage14d: priceChangePercentage14d,
            priceChangePercentage30d: priceChangePercentage30d,
            priceChangePercentage60d: priceChangePercentage60d,
            priceChangePercentage200d: priceChangePercentage200d,
            priceChangePercentage1y: priceChangePercentage1y,
            totalSupply: totalSupply,
            circulatingSupply: circulatingSupply,
            ath: ath,
            athChangePercentage: athChangePercentage,
            athDate: athDate,
            atl: atl,
            atlChangePercentage: atlChangePercentage,
            atlDate: atlDate
        }

        return data;
    }
}

function formatCoinCommunityData(
    twitterFollowers: number,
    redditAveragePosts48h: number,
    redditAverageComments48h: number,
    redditSubscribers: number,
    redditAccountsActive48h: number
): CoinCommunityData {

    const data: CoinCommunityData = {
        twitterFollowers: twitterFollowers,
        redditAveragePosts48h: redditAveragePosts48h,
        redditAverageComments48h: redditAverageComments48h,
        redditSubscribers: redditSubscribers,
        redditAccountsActive48h: redditAccountsActive48h
    }

    return data;
}


function formatCoinDevelopmentData(
    forks: number,
    stars: number,
    subscribers: number,
    totalIssues: number,
    closedIssues: number,
    pullRequestsMerged: number,
    pullRequestContributors: number,
    codeAdditionsDeletions4Weeks: {
        additions: number,
        deletions: number
    },
    commitCount4Weeks: number
): CoinDevelopmentData {

    const data = {
        forks: forks,
        stars: stars,
        subscribers: subscribers,
        totalIssues: totalIssues,
        closedIssues: closedIssues,
        pullRequestsMerged: pullRequestsMerged,
        pullRequestContributors: pullRequestContributors,
        codeAdditionsDeletions4Weeks: codeAdditionsDeletions4Weeks,
        commitCount4Weeks: commitCount4Weeks
    }

    return data;
}

const coinsUtils = {
    formatAllCoinsData,
    formatCoinData,
};

export default coinsUtils;
