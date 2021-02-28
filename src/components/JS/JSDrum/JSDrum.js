import React, {useEffect} from "react";
import './JSDrum.css'
import foo1 from './sounds/clap.wav'
import foo2 from './sounds/hihat.wav'
import foo3 from './sounds/kick.wav'
import foo4 from './sounds/openhat.wav'
import foo5 from './sounds/boom.wav'
import foo6 from './sounds/ride.wav'
import foo7 from './sounds/snare.wav'
import foo8 from './sounds/tom.wav'
import foo9 from './sounds/tink.wav'


export function JSDrum() {
    const keyboardObj = [
        {id: 'q', arr: [81, 'clap', foo1]},
        {id: 'w', arr: [87, 'hihat', foo2]},
        {id: 'e', arr: [69, 'kick', foo3]},
        {id: 'r', arr: [82, 'open', foo4]},
        {id: 't', arr: [84, 'boom', foo5]},
        {id: 'y', arr: [89, 'ride', foo6]},
        {id: 'u', arr: [85, 'snare', foo7]},
        {id: 'i', arr: [73, 'tom', foo8]},
        {id: 'o', arr: [79, 'tink', foo9]},
    ]

    function useKeyPress(event) {
        keyboardObj.map(elem => {
            if (event.key === elem.id) {
                let audio = new Audio(elem.arr[2])
                return (function func() {
                    audio.currentTime = 0
                    audio.play()

                })()
            } else {
                return null
            }
        })
    }


    useEffect(() => {
        window.addEventListener('keydown', useKeyPress);
        // cleanup this component
        return () => {
            window.removeEventListener('keydown', useKeyPress);
        };
    }, []);


    return (
        <div className={'main'}>
            <div className={'keys'}>
                {keyboardObj.map((elem, index) => {
                    return (
                        <div key={index} className={'key'} onClick={useKeyPress}>
                            <kbd>{elem.id}</kbd>
                            <span className="sound">{elem.arr[1]}</span>
                            <audio src={elem.arr[2]}></audio>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}