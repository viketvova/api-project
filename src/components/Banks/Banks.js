import React, {useState} from "react";
import {Table} from "./Table";
import {Button} from "../Button/Button";

function Banks() {
    const [click, setClick] = useState(false)
    const [bank, setBank] = useState(['Privat', 'NationalBank'])

    const onClickHandler = () => {
        setClick(!click)

    }



    return (
        <>
            <h1>Banks</h1>
            <Button onClick={onClickHandler} bank={bank} />
            {click ? <Table className='primary' /> : <Table className='hidden'/>}



        </>
    )
}
export default Banks