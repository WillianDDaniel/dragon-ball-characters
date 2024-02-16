interface resumeInfoProps {
    resume: string
    src: string
}

export default function ResumeInfo(props: resumeInfoProps) {

    return (
        <div className={`
            flex items-center justify-center h-auto pb-3 pr-3
            lg:h-min-[30vh]
            sm-1:p-3
        `}>

            <div className={`
                flex items-center h-6/6 w-[90%] 
                border border-white m-2 bg-zinc-700 
                lg:w-auto
            `}>

                <img 
                    src={props.src}
                    alt="" className="w-[90px] sm-1:hidden" 
                />

                <p className="p-4 text-sm text-justify">
                   {props.resume}
                </p>

            </div>
        </div>
    )
}