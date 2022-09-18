import React, {useEffect, useState} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import {Link} from "react-router-dom"

export const CryptocurrenciesTitle = () => {
    const [searchTerm, setSearchTerm] = useState("");



    return (
        <div className="cryptocurrencies-container">
            <div className="cryptocurrencies-wrapper">
                <div>
                <div className="cryptocurrencies-search">
                    <input placeholder="Search" type="text" onChange={(e)=> setSearchTerm(e.target.value)}></input>
                </div>
                
                <div className="cryptocurrencies-title">Cryptocurrencies</div>
                
                </div>


                <Cryptocurrencies slice={100} searchTerm={searchTerm}/>
                
            </div>
        </div>
    )
}






export const Cryptocurrencies = ({slice, searchTerm}) => {


    const {data: cryptosList, isFetching} = useGetCryptosQuery(slice)
    

    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        

        const filteredData = cryptosList?.data?.coins.filter((coin) => coin?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) || coin?.symbol?.toLowerCase().includes(searchTerm?.toLowerCase()))
        setCryptos(filteredData)

    }, [cryptosList, searchTerm])




    

    // useEffect(() => {
    //     setCryptos(cryptosList?.data?.coins)
    // }, [cryptosList])



    if(isFetching) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>



    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="table-section" style= {{height: `${slice > 25 ? "75vh" : "100%"}`, maxHeight: "1000px"}}>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Market Cap</th>
                        <th>24h Volumn</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {cryptos?.slice(0, slice).map((currency) => (
                        <tr key={currency.name}>
                            <td>{currency.rank}</td>
                            
                            <td>
                                <Link to={`/crypto/${currency.uuid}`} style={{color: "black"}} onClick={() => (window.scrollTo({top: 0}))}>
                                    <img src={currency.iconUrl} className="coin-icon"></img><span className="coin-name">{currency.name.length > 20 ? currency.name.slice(0,20)+"..." : currency.name}</span><span className="coin-symbol">{currency.symbol}</span>
                                </Link>
                                </td>

                            <td>${currency?.price > 0.1 ? numberWithCommas(parseFloat(currency?.price).toFixed(2)) : parseFloat(currency?.price).toFixed(4)}</td>

                            <td style={{color: `${currency.change>= 0 ? "rgba(11, 210, 0, 1)" : "red"}` , fontWeight: "500"}}>{currency.change}%</td>

                            <td>${millify(currency.marketCap)}</td>

                            <td>${millify(currency["24hVolume"])}</td>
                        </tr>
                        ))}
                        
                        

                    
                </tbody>
            </table>
        </div>
    )
}



