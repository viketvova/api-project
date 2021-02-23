import React, {useState} from "react";


export function Button(props) {

    return (
        <>
            {
                props.bank.map(elem => {
                    return (
                        <button onClick={props.onClick}>{elem}</button>
                    )
                })
            }


        </>
    )
}