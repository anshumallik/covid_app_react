import React, { useEffect, useState } from "react";
import './style.css';

const Covid = () => {
    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div>
            <section className="bg">
                <h1 className="title">Covid-19 Tracker</h1>
                <ul className="card_inline">
                    <li className="card">
                        <div className="card_inner bg0">
                            <h3>Our <span>Country</span></h3>
                            <h1>Nepal</h1>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner bg1">
                            <h3>Total <span>Recovered</span></h3>
                            <h1>{data.recovered}</h1>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_inner bg2">
                            <h3>Total <span>Cases</span></h3>
                            <h1>{data.confirmed}</h1>
                        </div>
                    </li>
                     <li className="card">
                        <div className="card_inner bg3">
                            <h3>Total <span>Deaths</span></h3>
                            <h1>{data.deaths}</h1>
                        </div>
                    </li>
                    
                </ul>
                
                <ul className="card_inline">
                    
                    <li className="card">
                        <div className="card_inner bg4">
                            <h3>Total <span>Active</span></h3>
                            <h1>{data.active}</h1>
                        </div>
                    </li>
                     <li className="card">
                        <div className="card_inner bg5 last">
                            <h3>Last <span>Updated</span></h3>
                            <h1>{data.lastupdatedtime}</h1>
                            
                        </div>
                    </li>
                    
                </ul>
            </section>
        </div>
    )
}

export default Covid;