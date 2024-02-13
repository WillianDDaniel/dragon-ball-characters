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
        mainImgDiv: 'lg:w-4/6 w-4/6 flex md:px-5 pt-3 sm-2:w-5/5 sm-2:flex sm-2:justify-center sm-2:p-0',
        mainImg: 'rounded-md w-5/5'
    }
    

    return (
        <section className="flex flex-col items-center lg:w-[59%] w-full overflow-hidden">
            <h2 className={`
                flex w-full justify-center text-orange-500 font-semibold text-2xl mt-3
                sm-2:text-md sm-2:text-center
            `}>
                mais informações...
            </h2>

            <Slide
                slideStyle={slideStyle}
                imageSrc={props.infoExtraCharacter ? props.infoExtraCharacter.image : props.fallbackToDefaultImage()}
                next={props.nextImg}
                prev={props.prevImg}
            />

            <h3 className="pt-3">{props.infoExtraCharacter ? props.infoExtraCharacter.name : ''}</h3>
            <p className={`
                py-2.5 px-3 text-sm text-center bg-zinc-600 ml-6 mx-3 mt-3 mb-4 rounded-md
                sm-1:p-3 sm-1:m-4
            `}>
                {props.infoExtraCharacter ? props.infoExtraCharacter.text : ''}
            </p>

        </section>
    )
}
