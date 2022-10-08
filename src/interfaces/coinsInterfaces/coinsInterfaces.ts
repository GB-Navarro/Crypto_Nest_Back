export type CoinInfo = {
  id: string,
  symbol: string,
  name: string,
  image: string,
  description?: string,
  links?: CoinLinks,
  blockTimeInMinutes?: number,
  hashingAlgorithm?: number,
  genesisDate?: string,
}

type CoinLinks = {
  homepage: string[],
  blockchainSite: string[],
  forum: string[],
  repositories: string[]
}

export type CoinMarketData = {
  currentPrice: number,
  high24h: number,
  low24h: number,
  marketCapRank: number,
  marketCap: number
  marketCapChange24h: number,
  marketCapChangePercentage24h: number,
  priceChange24h?: number,
  priceChangePercentage24h: number,
  priceChangePercentage7d: number,
  priceChangePercentage14d: number,
  priceChangePercentage30d: number,
  priceChangePercentage60d: number,
  priceChangePercentage200d: number,
  priceChangePercentage1y: number,
  totalSupply: string
  circulatingSupply: string
  ath?: number,
  athChangePercentage?: number,
  athDate?: string,
  atl?: number,
  atlChangePercentage?: number,
  atlDate?: string,
}

export type UnformattedCoinImages = {
  thumb: string,
  small: string,
  large: string
}

export type UnformattedCoinDescriptions = {
  en: string,
  de: string,
  es: string,
  fr: string,
  it: string,
  pl: string,
  ro: string,
  hu: string,
  nl: string,
  pt: string,
  sv: string,
  vi: string,
  tr: string,
  ru: string,
  ja: string,
  zh: string,
  "zh-tw": string,
  ko: string,
  ar: string,
  th: string,
  id: string,
  cs: string,
  da: string,
  el: string,
  hi: string,
  no: string
  sk: string,
  uk: string,
  he: string,
  fi: string,
  bg: string,
  hr: string,
  lt: string,
  sl: string
}

export type UnformattedCoinLinks = {
  homepage: string[],
  blockchain_site: string[],
  official_forum_url: string[],
  chat_url: string[],
  announcement_url: string[],
  twitter_screen_name: string,
  facebook_username: string,
  bitcointalk_thread_identifier: number,
  telegram_channel_identifier: string,
  subreddit_url: string,
  repos_url: {
    github: string[]
  },
  bitbucket: []
}





