import Character from "../entities/Character";
import { fetchCharactersApi } from "../services/api";

export const fetchCharacters = async (page: number) => {
    try {
        const characters: CharacterListDto = await fetchCharactersApi(page);
        return characters.results.map((characterDto) => {
            return new Character(
                characterDto.id,
                characterDto.name,
                characterDto.species,
                characterDto.type,
                characterDto.gender,
                characterDto.url,
                characterDto.created,
                characterDto.image,
            )
        })
    } catch (error) {
        return [];
    }
}