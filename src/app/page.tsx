'use client'
import Footer from "@/components/main/Footer"
import Header from "@/components/main/Header"
import Main from "@/components/main/Main"
import { useState, useEffect } from "react"

async function getData() {
  const res = await fetch('https://anime-characters-backend.vercel.app/characters-dragonball')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

interface Character {
  infoCharacter: any
}

export default function Home() {

  // Estate to set and store character 
  const [characters, setCharacters] = useState<Character[]>([])
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0)

  // Hook useEffect to find and to mount the component
  useEffect(() => {

    async function fetchData() {

      try {
        // Call the function that get data
        const data = await getData()

        // set characters
        setCharacters(data.characters)

      } catch (error) {
        console.error("Failed to fetch data:", error)
      }
    }

    fetchData()
  }, [])

  // Function to advance to the next character
  const nextCharacter = () => {

    setCurrentCharacterIndex(prevIndex => {

      // If stay on the last character, go back to the first
      if (prevIndex === characters.length - 1) {
        return 0
      } else {
        return prevIndex + 1
      }
    })
  }

  // Function to return to the previous character
  const previousCharacter = () => {
    setCurrentCharacterIndex(prevIndex => {

      // If stay on the first character, go to the last
      if (prevIndex === 0) {
        return characters.length - 1
      } else {
        return prevIndex - 1
      }
    })
  }
  
  return (
    <>
      <Header />

      {characters.length > 0 && (
        <Main
          infoCharacter={characters[currentCharacterIndex]}
          nextCharacter={nextCharacter}
          prevCharacter={previousCharacter}
        />
      )}

      <Footer />
    </>

  )
}
