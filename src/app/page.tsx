'use client'
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Main from "@/components/main/Main";
import { useState, useEffect } from "react";

async function getData() {
  const res = await fetch('https://backend-naruto-info.vercel.app/characters')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

interface Character {
  infoCharacter: any
  
}

export default function Home() {

  // Estado para armazenar os personagens e o índice do personagem atual
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  // Hook useEffect para buscar os dados ao montar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Chama a função para buscar os dados
        const data = await getData();
        // Define os personagens obtidos no estado
        setCharacters(data.characters);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    // Chama a função para buscar os dados
    fetchData();
  }, []); // Executa apenas uma vez, ao montar o componente

  // Função para avançar para o próximo personagem
  const nextCharacter = () => {
    setCurrentCharacterIndex(prevIndex => {
      // Se estiver no último personagem, volta para o primeiro
      if (prevIndex === characters.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  // Função para voltar ao personagem anterior
  const previousCharacter = () => {
    setCurrentCharacterIndex(prevIndex => {
      // Se estiver no primeiro personagem, vai para o último
      if (prevIndex === 0) {
        return characters.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  

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
