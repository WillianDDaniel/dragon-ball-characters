interface resumeInfoProps {
    resume: string
    resumeImg: string
}

export default function ResumeInfo(props: resumeInfoProps) {
    return (
        <div className="flex lg:h-[30vh] h-auto items-center justify-center">
            <div className="flex items-center h-6/6 lg:w-auto w-[90%] border border-white m-2 bg-zinc-700">
                <img src={props.resumeImg} alt="" className="w-[90px]" />
                <p className="pl-2 text-sm px-2">{props.resume}</p>
            </div>
        </div>
    )
}