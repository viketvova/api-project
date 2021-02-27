import React, {useState} from "react";
import './Translate.css'
import {Form} from "./Form";

export function Translate() {
    const [text, setText] = useState('Введите текст')
    const [translate, setTranslate] = useState('')
    const [textLat, setTextLat] = useState('Введите текст')
    const [translateLat, setTranslateLat] = useState('')

    function onClickArea() {
        setText('')
    }

    function onChangeHandler(e) {
        return setText(e.target.value)
    }

    function translateUrl() {
        setTranslate(changeCertLatUrl(text))
    }

    function onClickTextArea() {
        setTextLat('')
    }

    function onChangeTextHandler(e) {
        return setTextLat(e.target.value)
    }

    function translateText() {
        setTranslateLat(changeTextCirtoLat(textLat))
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


    function changeTextCirtoLat() {
        const chars = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'YO', 'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'YU', 'Я': 'YA'
        }
        return textLat.split('').map(function (elem) {
            return chars[elem] || elem;
        }).join("");
    }


    return (
        <div>
            <h1>Translater</h1>
            <h2>Генератор ЧПУ(человеко-понятные урлы)</h2>
            <Form
                onClick={onClickArea}
                onChange={onChangeHandler}
                translateText={translateUrl}
                text={text}
                translate={translate}/>
            <h2>Онлайн переводчик текстов на латиницу</h2>
            <Form
                onClick={onClickTextArea}
                onChange={onChangeTextHandler}
                translateText={translateText}
                text={textLat}
                translate={translateLat}
            />
        </div>
    )
}

