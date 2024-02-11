import DragonImg from "../DragonImg"

export default function Header() {
    return (
        <h1 className={`
            flex justify-center h-[8vh] 
            items-center text-xl 
            bg-gradient-to-bl from-zinc-950 to-zinc-800
            border-b border-b-zinc-600
            `}>

            <DragonImg />

            Personagens de&nbsp;
            <span className="font-extrabold text-amber-400">
                DRAGON
            </span> &nbsp;

            <span className="font-extrabold text-red-700">
                BALL
            </span>

            <DragonImg />
        </h1>
    )
}