import React, { useContext,useEffect, useState } from "react";
import './Home.css'
import { CoinContext } from "../../context/CoinContext";
const Home = () =>{


    const {allCoin,currency} = useContext (CoinContext);
    const [displayCoin,setdisplaycoin] = useState([]);

    useEffect

    return (

        <div className="home">
            <div className='hero'>
                <h1> Crypto MarketPlace </h1>
                
                <p>Welcome to CryptoMarket Hub! Discover, track, and manage your cryptocurrency portfolio with ease. Stay updated with real-time prices, market insights, and news. Start your crypto journey today</p>
                <form>
                    <input type = "text" placeholder="Search"/>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="crypto-table">
                <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className="market-cap">Market Cap</p>


                </div>
            </div>
            
        </div>
    )
}

export default Home