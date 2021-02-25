import React, {useState} from "react";
import {Button} from "../Button/Button";

function Banks() {

    const [bank, setBank] = useState([
        {id: 1, name: 'Privat', show: false},
        {id: 2, name: 'NationalBank', show: false}
    ])

    return (
        <>
            <h1>Banks</h1>
            <Button bank={bank}/>
        </>
    )
}

export default Banks