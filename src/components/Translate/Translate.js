import React, {useState} from "react";
import './Translate.css'

export function Translate() {
    const [text, setText] = useState('Введите текст')
    const [translate, setTranslate] = useState('')


    function onChangeHandler(e) {

        return setText(e.target.value)
    }


    function changeCertLatUrl() {
        const objCir = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', ' -', '-'];
        const objLat = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh', 'sch', '', 'u', '', 'e', 'yu', 'ya', '-', '-'];
        let newArr = []
        text.trim().toLowerCase().split('').map(elem => {
            return (objCir.find((cirElem, cirIndex) => {
                if (elem === cirElem) newArr.push(objLat[cirIndex])
            }))
        })
        return newArr.join('')
    }

    function news() {
        setTranslate(changeCertLatUrl(text))
    }


    return (
        <div>
            <h1>Translater</h1>
            <h2>Генератор ЧПУ(человеко-понятные урлы)</h2>
            <form>
                <h3>Введите текст на кириллице</h3>
                <div className='area'>
                    <textarea onClick={() => setText('')}
                              className={'left-area'} value={text}
                              onChange={onChangeHandler}>
                    </textarea>

                    <textarea className={'right-area'}
                              defaultValue={translate}>
                    </textarea>
                    <div>
                        <input type='button' value={'Translate'} onClick={news}/>
                    </div>
                </div>
            </form>
        </div>
    )
}