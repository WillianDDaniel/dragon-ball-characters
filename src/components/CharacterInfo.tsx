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
        mainDiv: 'flex w-[95%] lg:h-[29vh] h-auto justify-center p-3 items-center',
        leftArrow: '',
        rightArrow: '',
        leftArrowDiv: 'sm-2:w-2/6 w-1/6',
        rightArrowDiv: 'sm-2:w-2/6 w-1/6',
        mainImgDiv: 'md-custom:w-[55%] w-5/5 flex justify-center',
        mainImg: 'rounded-md md-custom:w-[90%] lg:w-5/6 w-5/5'
    }

    return (
        <section className={`
            flex flex-col items-center lg:w-[39%] h-auto w-full lg:border-r-2 lg:border-zinc-800
        `}>
            <h2 className={`
                mt-2 w-[60%] text-center bg-zinc-900 text-orange-600 
                font-semibold px-3 py-0.5 rounded-md
            `}>
                {props.infoCharacter.name}
            </h2>

            <Slide
                slideStyle={slideStyle}
                imageSrc={props.infoCharacter.profile_img}
                next={props.nextCharacter}
                prev={props.prevCharacter}
            />
            
            <AdditionalInfo additional={props.infoCharacter.additional} 
            />

            <ResumeInfo resume={props.infoCharacter.resume} 
                resumeImg={props.infoCharacter.resume_img} 
            />

        </section>
    )
}