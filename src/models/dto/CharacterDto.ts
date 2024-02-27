interface CharacterDto {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: LocationRefDto;
    location: LocationRefDto;
    image: string;
    episode: string[];
    url: string;
    created: string;
}