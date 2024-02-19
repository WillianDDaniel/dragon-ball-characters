import AdditionalInfo from "./AdditionalInfo"
import ResumeInfo from "./ResumeInfo"
import Slide from "./Slide"

interface characterInfoProps {
    data?: any
    next: () => void
    prev: () => void
}

export default function CharacterInfo(props: characterInfoProps) {

    // Object to style the slide component in the Characters Info Section
    const slideStyle = {
        mainDiv: 'flex w-[95%] lg:h-[29vh] h-auto justify-center p-3 items-center',
        leftArrow: '',
        rightArrow: '',
        leftArrowDiv: 'sm-2:w-2/6 w-1/6',
        rightArrowDiv: 'sm-2:w-2/6 w-1/6',
        mainImgDiv: 'md-custom:w-[55%] w-5/5 flex justify-center',
        mainImg: 'rounded-md md-custom:w-[90%] lg:w-5/6 w-5/5'
    }

    const character = props.data

    return (
        <section className={`
            flex flex-col items-center 
            h-auto w-full 
            lg:w-[39%] lg:border-r-2 lg:border-zinc-800
        `}>
            <h2 className={`
                w-[60%] text-center bg-zinc-900 text-orange-600 
                font-semibold mt-2 px-3 py-0.5 rounded-md
            `}>
                {character.name}
            </h2>

            <Slide
                slideStyle={slideStyle}
                src={character.profile_img}
                next={props.next}
                prev={props.prev}
            />

            <AdditionalInfo
                data={character} />

            <ResumeInfo
                src={character.resume_img}
                resume={character.resume} />
        </section>
    )
}