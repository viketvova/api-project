import React, {useState, useEffect} from "react";

export function NationalBank() {
    const api = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

    const [cash, setCash] = useState([])
    const [data, setData] = useState('')

    async function getApiBank() {
        let getApi = await fetch(api);
        let dataApi = await getApi.json();
        setCash(dataApi)
        setData(dataApi[0].exchangedate)
    }

    useEffect(() => {
        getApiBank();
    }, []);

    console.log(cash)

    return (
        <>

            <h2>Курс валют на {data}</h2>
            <table className='primary'>
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Sale</th>

                </tr>
                {cash.map((elem, index) => {
                    return (
                        <tr key={index}>
                            <td>{elem.txt} ({elem.cc})</td>
                            <td>{elem.rate}</td>
                        </tr>
                    )

                })}
                < /thead>
            </table>
        </>
    )
}