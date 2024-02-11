import AdditionalInfo from "./AdditionalInfo";
import ResumeInfo from "./ResumeInfo";
import Slide from "./Slide";


interface characterInfoProps {
    infoCharacter: any
    nextCharacter: () => void
    prevCharacter: () => void
}

export default function CharacterInfo(props: characterInfoProps) {

    const slideStyle = {
        mainDiv: 'flex w-[95%] lg:h-[30vh] h-auto justify-center p-3 items-center',
        leftArrow: '',
        rightArrow: '',
        leftArrowDiv: 'w-1/5',
        rightArrowDiv: 'w-1/5',
        mainImgDiv: 'w-5/5 flex justify-center',
        mainImg: 'rounded-md w-5/5'
    }

    return (
        <section className="flex flex-col items-center lg:w-[39%] h-auto w-full lg:border-r-2 lg:border-zinc-800">
            <h2 className="mt-2 bg-zinc-900 px-3 py-0.5 rounded-sm">{props.infoCharacter.name}</h2>
            <Slide
                slideStyle={slideStyle}
                imageSrc={props.infoCharacter.profile_img}
                next={props.nextCharacter}
                prev={props.prevCharacter}
            />
            <AdditionalInfo additional={props.infoCharacter.additional} />
            <ResumeInfo resume={props.infoCharacter.resume} resumeImg={props.infoCharacter.resume_img}/>

        </section>
    )
}