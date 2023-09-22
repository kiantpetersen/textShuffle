import React, { useEffect, useState } from 'react';
import Splitting from 'splitting';
import { gsap } from "gsap";

function TextShuffle() {

    const [text, setText] = useState('Hello there')
    const lettersAndSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '{', '}', '>', '<', '?', '|'];
    function getRandomText(len) {
        let res = ''
        for (let i = 0; i < len; i++) {
            res += lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]

        }
        // console.log('TEXT: ', res)
        return res
    }
    function shuffleChars(e) {
        console.log('Value: ', e.target)
        const len = text.length
        let ogText = text
        let textArr = text.split('')
        textArr.forEach((char, position) => {
            // gsap.killTweensOf(char);
            gsap.fromTo('.text-shuffle', {
                opacity: 0
            }, {
                duration: 0.03,
                innerHTML: () => {
                    return getRandomText(len)
                    // return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
                },
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.05,
                onComplete: () => gsap.set('.text-shuffle', { innerHTML: ogText, delay: 0.03 }),
            })
        });

    }

    return (
        <div className="text-container">
            <h1 onMouseEnter={shuffleChars} className="text-shuffle" data-splitting="">
                {text}
            </h1>
        </div>
    );
}

export default TextShuffle;