import { useState } from "react"
import CharacterInfo from "../CharacterInfo"
import MoreInfo from "../MoreInfo"

interface mainProps {
    infoCharacter: any
    nextCharacter: () => void
    prevCharacter: () => void
}

export default function Main(props: mainProps) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    
    // Function to advance to the next character
    const next = () => {
        setCurrentImageIndex(nextIndex => {
            if (nextIndex === props.infoCharacter.extras.length - 1) {
                return 0
            } else {
                return nextIndex + 1
            }
        })
    }

    // Function to go back to the previous character
    const prev = () => {
        setCurrentImageIndex(prevIndex => {
            if (prevIndex === 0) {
                return props.infoCharacter.extras.length - 1
            } else {
                return prevIndex - 1
            }
        })
    }

    function fallbackToDefaultImage() {
        setCurrentImageIndex(0)
    }
    
    return (
        <main className={`
            flex flex-col h-auto justify-center lg:h-[84vh] lg:flex-row
        `}>
            <CharacterInfo
                infoCharacter={props.infoCharacter}
                nextCharacter={props.nextCharacter}
                prevCharacter={props.prevCharacter}
            />
            
            <MoreInfo
                infoExtraCharacter={props.infoCharacter.extras[currentImageIndex]}
                nextImg={next}
                prevImg={prev}
                fallbackToDefaultImage={fallbackToDefaultImage}
            />
        </main>
    )
}

