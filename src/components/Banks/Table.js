import React from "react";
import './Table.css'
import {TablePrivatBank} from "./TablePrivatBank";
import {NationalBank} from "./NationalBank";

export function Table(props) {




    return (
        <>
            {
                props.name === 'Privat' ? <TablePrivatBank />
            : props.name === 'NationalBank' ? <NationalBank />
            : null
            }



        </>
    )
}
