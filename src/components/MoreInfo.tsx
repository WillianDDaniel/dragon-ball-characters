import Slide from "./Slide";

interface MoreInfoProps {
    infoExtraCharacter: any
    nextImg: () => void
    prevImg: () => void
    fallbackToDefaultImage: () => void
}

export default function MoreInfo(props: MoreInfoProps) {

    const slideStyle = {
        mainDiv: 'flex w-full justify-center p-1 items-center',
        leftArrow: '',
        rightArrow: '',
        leftArrowDiv: 'w-1/6',
        rightArrowDiv: 'w-1/6',
        mainImgDiv: 'lg:w-4/6 w-4/6 flex px-5 pt-3',
        mainImg: 'rounded-md w-5/5'
    }
    console.log(props.infoExtraCharacter)

    return (
        <section className="flex flex-col items-center lg:w-[59%] w-full overflow-hidden">
            <h2 className="flex w-full justify-center text-2xl pt-3">Mais informações</h2>

            <Slide
                slideStyle={slideStyle}
                // precisa verificar o que está acontecendo
                imageSrc={props.infoExtraCharacter ? props.infoExtraCharacter.image : props.fallbackToDefaultImage()}
                next={props.nextImg}
                prev={props.prevImg}
            />

            <h3 className="pt-4">{props.infoExtraCharacter ? props.infoExtraCharacter.name : ''}</h3>
            <p className="py-3 px-3 text-sm text-center bg-zinc-600 ml-6 mx-3 mt-4 mb-4 rounded-md">{props.infoExtraCharacter ? props.infoExtraCharacter.text : ''}</p>

        </section>
    )
}
