import React from "react";
import {OneButton} from "./OneButtons";


export function Button(props) {

    return (
        <>
            {
                props.bank.map(elem => {
                    return (
                        <OneButton key={elem.id} {...elem} />
                    )
                })
            }
        </>
    )
}