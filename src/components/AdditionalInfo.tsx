interface additionalInfoProps {
    additional: any
}

export default function AdditionalInfo(props: additionalInfoProps) {
    return (
        <div className="flex flex-col w-full text-sm lg:h-[22vh] p-1 h-auto items-center justify-center lg:m-0 m-6">
            <p><span className="text-amber-400 font-semibold">Pai:</span> {props.additional.father}</p>
            <p><span className="text-amber-400 font-semibold">Mãe:</span> {props.additional.mother}</p>
            <p><span className="text-amber-400 font-semibold">Poder:</span> {props.additional.power}</p>
            <p className=" text-base text-yellow-300">{props.additional.more}</p>
        </div>
    )
}