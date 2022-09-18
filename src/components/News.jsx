import React, {useState, useEffect} from 'react'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Link} from "react-router-dom"
import moment from 'moment';


const News = ({count}) => {
    const [cryptos, setCryptos] = useState([])
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
    const [news, setNews] = useState([])

    







    const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: `${newsCategory} crypto`, count: count})
    const { data } = useGetCryptosQuery(100);
    
    

    useEffect(() => {
        

        const cryptosData = data?.data?.coins
        setCryptos(cryptosData)

    }, [data])


    

    useEffect(()=> {
        if(cryptoNews) {
            setNews(cryptoNews?.value)
        }
    }, [cryptoNews, newsCategory])

    if(!cryptoNews?.value) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>




    
    

    





    return (
        <div className="news-container">
            {count > 8 ? 
            
            <div className="cryptocurrencies-search" style={{paddingRight: "20px"}}>
                <select placeholder="Select a Crypto" onChange={(e) => setNewsCategory(e.target.value)}>
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    {cryptos?.map((crypto) => (
                        <option value={crypto?.name} key={crypto?.name}>{crypto?.name}</option>
                    ))}
                </select>
            </div> 
            
            : ""}

            {count > 8 ? <div className="cryptocurrencies-title">News</div> : ""}
            <div className="news-wrapper">
                
                {news?.length < 1 ? <div>No Result For {newsCategory}</div> :
                
                news?.map((news) => (
                    <a href={news?.url} target="_blank" className="news-box" style={{textDecoration: "none"}} key={news.name}>
                        <div className="news-box-title">
                            <div className="news-title">{news?.name.length > 50 ? news?.name.slice(0,50)+"..." : news?.name}</div>
                            <img src={news?.image?.thumbnail?.contentUrl}></img>
                        </div>
                        <div className="news-description">
                            {news?.description.length > 160 ? news?.description.slice(0,160)+"..." : news?.description}
                        </div>
                        <div className="news-date">
                            <div>{news?.provider[0].name.length > 15 ? news?.provider[0].name.slice(0,15)+"..." : news?.provider[0].name}</div>
                            <div>{moment(news?.datePublished).startOf("ss").fromNow()}</div>
                            
                        </div>
                        
                    </a>
                ))}
                


                
            </div>
        </div>
    )
}

export default News