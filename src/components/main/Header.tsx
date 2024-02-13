import DragonImg from "../DragonImg"

export default function Header() {
    return (
        <h1 className={`
            flex justify-center h-[8vh] 
            items-center 
            md:text-xl text-md p-2
            bg-gradient-to-bl from-zinc-950 to-zinc-800
            border-b border-b-zinc-600
            sm-2:h-auto sm-2:flex-wrap
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