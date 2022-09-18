import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import {Link} from "react-router-dom"
import {Cryptocurrencies} from './Cryptocurrencies'
import News from "./News"

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    if (isFetching) {
        return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    }

    return (
        <div className="pages-container">
            <div className="homepage-wrapper">
           

                <div className="homepage-title">Top 10 Cryptocurrencies</div>
                <div className="homepage-subtitle"><Link to="/cryptocurrencies" style={{textDecoration: "none", color: "rgb(45, 173, 247)"}}>Show More</Link></div>
                <Cryptocurrencies slice={10} searchTerm={""}/>

                <div className="homepage-title home-news-title">Latest Crypto News</div>
                <div className="homepage-subtitle"><Link to="/news" style={{textDecoration: "none", color: "rgb(45, 173, 247)"}}>Show More</Link></div>



                
            </div>
            <News count={6}/>
        </div>
    )
}

export default Homepage


















{/* <div className="homepage-title">Global Crypto Stats</div>
<div className="homepage-info-box">
    <div className="homepage-box">
        <div className="homepage-box-title">Total Cryptocurrencies</div>
        <div className="homepage-box-info">{millify(globalStats?.totalCoins)}</div>
    </div>
    <div className="homepage-box">
        <div className="homepage-box-title">Total Market Cap</div>
        <div className="homepage-box-info">{millify(globalStats?.totalMarketCap)}</div>
    </div>
    <div className="homepage-box">
        <div className="homepage-box-title">Total Exchanges</div>
        <div className="homepage-box-info">{millify(globalStats?.totalExchanges)}</div>
    </div>
    <div className="homepage-box">
        <div className="homepage-box-title">Total 24h Volume</div>
        <div className="homepage-box-info">{millify(globalStats?.total24hVolume)}</div>
    </div>
    <div className="homepage-box">
        <div className="homepage-box-title">Total Markets</div>
        <div className="homepage-box-info">{millify(globalStats?.totalMarkets)}</div>
    </div>
</div> */}