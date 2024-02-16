import MainContext from "./MainContext"

async function getData() {

    const res = await fetch('https://anime-characters-backend.vercel.app/characters-dragonball')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Main() {

    // this comment is for skeleton test
    // await new Promise((resolve) => setTimeout(resolve, 2000000))

    const characters = await getData()

    return (
        <>
            <MainContext
                data={characters} />
        </>
    )
}

