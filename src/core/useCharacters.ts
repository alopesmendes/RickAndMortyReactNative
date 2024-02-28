import { useEffect, useState } from "react"
import Character from "../entities/Character"
import { fetchCharacters } from "../useCases/fetchCharacters";
import { NativeScrollEvent } from "react-native";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const data = await fetchCharacters(page);
            setCharacters([...characters, ...data])
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(page);
    }, [page]);


    const nextPage = () => {
        setPage(page + 1);
    };

    return {characters, loading, nextPage};
}