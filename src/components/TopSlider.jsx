import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import {Link} from "react-router-dom"
import {Cryptocurrencies} from './Cryptocurrencies'


const TopSlider = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats
    if (isFetching) {
        return <div></div>
    }
    return (
        <div className="slider">
        <div className="slider-track">
            <div className="slide no-select">
                Total Cryptocurrencies: {millify(globalStats?.totalCoins)}
            </div>
            <div className="slide no-select">
                Total Market Cap: ${millify(globalStats?.totalMarketCap)}
            </div>
            <div className="slide no-select">
                Total Exchanges: {millify(globalStats?.totalExchanges)}
            </div>
            <div className="slide no-select">
                Total 24h Volume: ${millify(globalStats?.total24hVolume)}
            </div>
            <div className="slide no-select">
                Total Markets: {millify(globalStats?.totalMarkets)}
            </div>
            <div className="slide no-select">
                Total Cryptocurrencies: {millify(globalStats?.totalCoins)}
            </div>
            <div className="slide no-select">
                Total Market Cap: {millify(globalStats?.totalMarketCap)}
            </div>
            <div className="slide no-select">
                Total Exchanges: {millify(globalStats?.totalExchanges)}
            </div>
            <div className="slide no-select">
                Total 24h Volume: {millify(globalStats?.total24hVolume)}
            </div>
            <div className="slide no-select">
                Total Markets: {millify(globalStats?.totalMarkets)}
            </div>






            <div className="slide no-select">
                Total Cryptocurrencies: {millify(globalStats?.totalCoins)}
            </div>
            <div className="slide no-select">
                Total Market Cap: {millify(globalStats?.totalMarketCap)}
            </div>
            <div className="slide no-select">
                Total Exchanges: {millify(globalStats?.totalExchanges)}
            </div>
            <div className="slide no-select">
                Total 24h Volume: {millify(globalStats?.total24hVolume)}
            </div>


        </div>
    </div>
    )
}

export default TopSlider