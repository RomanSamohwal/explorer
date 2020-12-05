import React, {useEffect} from 'react';
import './App.css';
import {TableComponent} from '../common/components/table/Table';

export const App = () => {

    const coins_list = 'https://api.coingecko.com/api/v3/coins/list'
    const coins_markets = 'https://api.coingecko.com/api/v3/coins/markets' +
        '?vs_currency=usd&order=market_cap_asc&per_page=100&page=1&sparkline=false'
    //perkle
    const coin = `https://api.coingecko.com/api/v3/coins/chaucha`
    const coins_tickers = `https://api.coingecko.com/api/v3/coins/chaucha/tickers`
    const const_history = `https://api.coingecko.com/api/v3/coins/chaucha/history?date=30-11-2020`

   let fetchData = async (url: string) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        fetchData(coins_list)
        fetchData(coins_markets)
        fetchData(coin)
        fetchData(coins_tickers)
        fetchData(const_history)
    }, [])

    return (
        <div className="App">
            <TableComponent/>
        </div>
    );
}

export type MarketObjectType = {
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    circulating_supply: number
    current_price: number
    fully_diluted_valuation?: null
    high_24h: number
    id: string
    image: string
    last_updated: string
    low_24h: number
    market_cap: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    market_cap_rank: null
    max_supply: null
    name: string
    price_change_24h: number
    price_change_percentage_24h: number
    roi: null
    symbol: string
    total_supply: null
    total_volume: number
}


