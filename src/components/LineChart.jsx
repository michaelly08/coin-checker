import React, {useState, useEffect} from 'react'
import {Line, Bar} from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';




const LineChart = ({coinHistory, currentPrice, coinName, timePeriod}) => {
    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i< coinHistory?.data?.history?.length; i++) {
        coinPrice.unshift(coinHistory?.data?.history[i]?.price)
        if(timePeriod === "24h" || timePeriod === "3h") {
            coinTimestamp.unshift(new Date((coinHistory?.data?.history[i]?.timestamp)*1000).toLocaleDateString("en-GB" , {month:"numeric",day:"numeric", hour:"numeric", minute:"numeric"}))
        }
        else {
            coinTimestamp.unshift(new Date((coinHistory?.data?.history[i]?.timestamp)*1000).toLocaleDateString("en-GB" , { year:"numeric", month:"numeric", day:"numeric"}))
        }
        
    }




    ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );
    



    
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        interaction: {
            intersect: false,
            mode: 'index',
        }, 
        maintainAspectRatio: false,
        scales: {
            //     yAxes: [
            //     {
            //         ticks: {
            //         beginAtZero: true,
            //         },
            //     },
            // ],
            x: {
                ticks: {
                    maxTicksLimit: 5,
                    
                }
            }
        },
    };

    
    
    



    


    return (
        <div className='linechart-container'>
            <div className="linechart">
                <Line data={data} options={options}/>
            </div>
        </div>
    )
}

export default LineChart






{/* <Plot data = {[{ x: coinTimestamp, y: coinPrice, type: "scatter"}]} layout={{title:"test", backgroundColor: "red"}} className='linechart' useResizeHandler/> */}








