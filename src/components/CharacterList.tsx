import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Character from "../entities/Character";
import { fetchCharacters } from "../useCases/fetchCharacters";
import { CharacterListItem } from "./CharacterListItem";

const CharacterList = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async (page: number) => {
        try {
            const characterData = await fetchCharacters(page);
            console.log("Character data:", characterData)
            setCharacters(characterData)
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <ScrollView>
          {characters.map((character: Character) => (
            <CharacterListItem id={character.id} name={character.name} species={character.species} type={character.type} gender={character.gender} url={character.url} created={character.created} image={character.image} ></CharacterListItem>
          ))}
          <Button onPress={handlePreviousPage} title="Previous Page" />
          <Button onPress={handleNextPage} title="Next Page" />
        </ScrollView>
    );
}

export default CharacterList;

