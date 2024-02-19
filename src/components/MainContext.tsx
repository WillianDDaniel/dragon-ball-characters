'use client'
import { useState } from "react";
import CharacterInfo from "./CharacterInfo";
import MoreInfo from "./MoreInfo";

interface MainContextProps {
    data?: any
}

export default function MainContext(props: MainContextProps) {

    const [currentIndex, setIndex] = useState(0)

    // Function to advance to the next character
    function next() {

        // if in the last, turn back to the first character
        if (currentIndex === props.data.characters.length - 1) {
            setIndex(0)
        } else {
            setIndex(currentIndex + 1);
        }
    }

    // Function to return to the previous character
    function previous() {

        // if in the first, move to the last character
        if (currentIndex === 0) {
            setIndex(props.data.characters.length - 1);
        } else {
            setIndex(currentIndex - 1);
        }
    }

    const characters = props.data.characters[currentIndex]

    return (

        <main className={`
            flex flex-col h-auto justify-center lg:h-[84vh] lg:flex-row
        `}>

            <CharacterInfo
                data={characters}
                next={next}
                prev={previous}
            />

            <MoreInfo
                data={characters}
            />
        </main>

    )
}