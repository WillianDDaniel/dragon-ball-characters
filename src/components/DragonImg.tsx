import Image from "next/image";
import DragonBalPng from "/public/dragonball.png"

export default function DragonImg() {
    return <Image className="mx-3"
        src={DragonBalPng}
        width={27}
        height={27}
        alt="Picture of the author"
    /> 
}