import React, {useEffect, useState} from "react";
import './Table.css'

export function Table(props) {
    const [cash, setCash] = useState([]);

    async function getApiPrivatbank() {
        let fetchApi = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        let jsonApi = await fetchApi.json();
        setCash(jsonApi)
        console.log(jsonApi)
    }

    useEffect(() => {
        getApiPrivatbank();
    }, []);

    console.log(props)

    return (
        <table className={props.className}>
            <thead>
            <tr>
                <th>Currency</th>
                <th>Sale</th>
                <th>Buy</th>
            </tr>
            {cash.map((elem, index) => {
                return (<tr key={index}>

                        <td>{elem.ccy} -> {elem.base_ccy}</td>
                        <td>{parseFloat(elem.sale).toFixed(2)}</td>
                        <td>{parseFloat(elem.buy).toFixed(2)}</td>
                    </tr>
                )
            })}
            </thead>
        </table>
    )
}