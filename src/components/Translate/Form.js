import React from "react";
import {Input} from "./Input";

export function Form(props) {

    return (
        <>
            <form>
                <h3>Введите текст на кириллице</h3>
                <div className='area'>
                    <textarea onClick={props.onClick}
                              className={'left-area'} value={props.text}
                              onChange={props.onChange}>
                    </textarea>

                    <textarea className={'right-area'}
                              defaultValue={props.translate}>
                    </textarea>
                    <div>
                        <Input onClick={props.translateText}/>
                    </div>
                </div>
            </form>
        </>
    )
}

