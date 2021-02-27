import React from "react";

export function Option(props) {
    const json = require('./city.list2.json');
    return (
        <>
            <option>Выберите город</option>
            {json.map((elem, index) => {
                return <option key={index}>{elem.name}</option>
            })}


        </>
    )
}