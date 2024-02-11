interface additionalInfoProps {
    additional: any
}

export default function AdditionalInfo(props: additionalInfoProps) {
    return (
        <div className="flex flex-col w-full lg:h-[22vh] h-auto items-center justify-center lg:m-0 m-6">
            <p>Pai: {props.additional.father}</p>
            <p>Mãe: {props.additional.mother}</p>
            <p>Poder: {props.additional.power}</p>
            <p>{props.additional.more}</p>
        </div>
    )
}