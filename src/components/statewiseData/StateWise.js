import React, { useEffect, useState } from 'react'
import './statewise.css';

const StateWise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="main_heading">
                    <h1 className="text-center text-color pt-5 pb-5">INDIA Covid-19 statewise data</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currElem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{currElem.state}</td>
                                            <td>{currElem.confirmed}</td>
                                            <td>{currElem.recovered}</td>
                                            <td>{currElem.deaths}</td>
                                            <td>{currElem.active}</td>
                                            <td>{currElem.lastupdatedtime}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StateWise;
