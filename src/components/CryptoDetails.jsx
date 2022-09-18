import React, {useState} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import {Link} from "react-router-dom"
import HTMLReactParser from "html-react-parser"
import {useParams} from "react-router-dom"
import {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../services/cryptoApi"
import LineChart from "./LineChart"



const CryptoDetails = () => {
    const {coinId} = useParams()
    const [timePeriod, setTimePeriod] = useState("7d")
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId)
    const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod})
    

    if(isFetching) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

    

    const coin = data?.data?.coin

    console.log(coin)


    function numberWithCommas(x) {
        if(typeof x === 'string') {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            return "Unknown"
        }
        
    }

    const timeOption = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"]


    return (
        <div className="cryptodetails-container">
            <div className="cryptodetails-wrapper">
                <div className="cryptodetails-top-box">
                    <div className="cryptodetails-name-box">
                        <div className="cryptodetails-name">
                            <img src={coin?.iconUrl}></img>
                            <div>{coin?.name.length > 18 ? coin?.name.slice(0,18)+"..." : coin?.name}</div>
                            <span>{coin?.symbol}</span>
                        </div>
                        <span className="cryptodetails-rank">
                            Rank: #{coin?.rank}
                        </span>
                        <div className="cryptodetails-links">{coin?.links?.map((link) => (
                            <a href={link?.url} key={link?.type + link?.name} target="_blank">
                                {link?.type}
                            </a>
                        ))}</div>
                    </div>

                    <div className="cryptodetails-price-box">
                        <div className="cryptodetails-price">
                            <div style={{marginRight: "10px"}}>
                                ${coin?.price > 0.1 ? numberWithCommas(parseFloat(coin?.price).toFixed(2)) : parseFloat(coin?.price).toFixed(4)}
                            </div>


                            <div style={{backgroundColor: `${coin?.change >= 0 ? "rgba(11, 210, 0, 1)" : "red"}`, color: "white"}} className="cryptodetails-change">
                                {coin?.change >= 0 ? <i className='bx bxs-up-arrow'></i> : <i className='bx bxs-down-arrow' ></i>}{coin?.change}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cryptodetails-middle-box">
                    <div className="cryptodetails-details">
                        <div>
                            <span className="cryptodetails-span1">Market Cap</span>
                            <span className="cryptodetails-span2">${numberWithCommas(coin?.marketCap)}</span>
                        </div>
                    </div>


                    <div className="cryptodetails-details">
                        <div>
                            <span className="cryptodetails-span1">Fully Diluted Market Cap</span>
                            <span className="cryptodetails-span2">${numberWithCommas(coin?.fullyDilutedMarketCap)}</span>
                        </div>
                    </div>


                    <div className="cryptodetails-details">
                        <div>
                            <span className="cryptodetails-span1">Volume 24h</span>
                            <span className="cryptodetails-span2">${numberWithCommas(coin["24hVolume"])}</span>
                        </div>

                    </div>


                    <div className="cryptodetails-details">
                        <div>
                            <span className="cryptodetails-span1">Circulating Supply</span>
                            <span className="cryptodetails-span2">{numberWithCommas(parseFloat(coin?.supply?.circulating).toFixed(2))} {coin?.symbol}</span>
                        </div>


                        <div className="cryptodetails-subdetail"><span>Total Supply</span> <span>{numberWithCommas(parseFloat(coin?.supply?.total).toFixed(2))}</span></div>
                    </div>


                </div>
                <div className="chart-title">{coin?.symbol} Price Chart</div>
                <div className="time-select">
                    <select onChange={(e) => setTimePeriod(e.target.value)} defaultValue="7d">
                        {timeOption?.map((option) => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                </div>
                
                <LineChart coinHistory={coinHistory} currentPrice={millify(coin?.price)} coinName={coin?.name} timePeriod={timePeriod}/>
                <div className="cryptodetails-description">
                    {HTMLReactParser(coin?.description)}
                </div>

            </div>
        </div>
    )
}

export default CryptoDetails