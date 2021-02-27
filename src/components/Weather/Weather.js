import React, {useState, useEffect} from "react";
import {Option} from "./Option";


export function Weather() {
    const json = require('./city.list2.json');

    const [city, setCity] = useState('')
    const [data, setData] = useState([])
    let newCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=494fcb6902b21407e4ed0dc0954351db&units=metric`


    function onChangeCity(e) {
        setCity(e.target.value)
    }

    function getWeather() {
        fetch(newCity)
            .then(getApi => getApi.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        getWeather();
    }, []);

    console.log(city)
    console.log(data)


    return (
        <>
            <h1>Weather for Ukraine</h1>
            <form>
                <select value={city} name={'selected'} onChange={onChangeCity}>
                    <option>Выберите город</option>
                    <Option/>
                </select>
                <div>

                   <h3>Weather</h3>

                </div>

            </form>
        </>
    )
}

