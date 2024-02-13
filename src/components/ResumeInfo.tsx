interface resumeInfoProps {
    resume: string
    resumeImg: string
}

export default function ResumeInfo(props: resumeInfoProps) {

    return (
        <div className={`
            flex lg:h-min-[30vh] h-auto items-center justify-center pb-3 pr-3
            sm-1:p-3
        `}>

            <div className={`
                flex items-center h-6/6 lg:w-auto w-[90%] 
                border border-white m-2 bg-zinc-700
            `}>

                <img 
                    src={props.resumeImg} 
                    alt="" className="w-[90px] sm-1:hidden" 
                />

                <p className="p-4 text-sm text-justify">
                    {props.resume}
                </p>

            </div>
        </div>
    )
}