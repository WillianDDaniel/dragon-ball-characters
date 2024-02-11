import { useEffect, useState } from "react";
import CharacterInfo from "../CharacterInfo";
import MoreInfo from "../MoreInfo";

interface mainProps {
    infoCharacter: any
    nextCharacter: () => void
    prevCharacter: () => void
}

export default function Main(props: mainProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Função para avançar para o próximo personagem

    const next = () => {
        setCurrentImageIndex(nextIndex => {
            if (nextIndex === props.infoCharacter.extras.length - 1) {
                return 0;
            } else {
                return nextIndex + 1;
            }
        })
    }

    // Função para voltar ao personagem anterior
    const prev = () => {
        setCurrentImageIndex(prevIndex => {
            if (prevIndex === 0) {
                return props.infoCharacter.extras.length - 1; // Volta para o último elemento do array
            } else {
                return prevIndex - 1; // Retrocede para o elemento anterior
            }

        })
    }

    function fallbackToDefaultImage() {
        setCurrentImageIndex(0);
    }
    
    return (
        <main className="flex flex-col lg:flex-row justify-center lg:h-[84vh] h-auto">
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

