import React, {useState} from 'react'
import {Table} from "../Banks/Table";


export function OneButton({name, show}) {

    const [checked, setChecked] = useState(show)

    const onClicked = () => {
        setChecked(!checked)
    }

    return (
        <>
            <button onClick={onClicked}>{name}</button>
            {
                checked && name === 'Privat'
                    ? <Table name={name}/>
                    : checked && name === 'NationalBank'
                    ? <Table name={name}/>
                    : <Table className='hidden'/>
            }
        </>
    )
}