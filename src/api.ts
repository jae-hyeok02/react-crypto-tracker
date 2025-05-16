const BASE_URL = "https://api.coinpaprika.com/v1";
const BASE_URL2 = "https://ohlcv-api.nomadcoders.workers.dev";
//https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  //return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000); // millisecond => second로 변경
  const startDate = endDate - 60 * 60 * 24 * 7; // 현재 기준 7일 전
  ///historical?start=${startDate}&end=${endDate}
  return fetch(`${BASE_URL2}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
