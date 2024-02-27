
class Character {
    id: number;
    name: string;
    species: string;
    type: string;
    gender: string;
    url: string;
    created: string;
    image: string;

    constructor(
        id: number, 
        name: string, 
        species: string,
        type: string,
        gender: string,
        url: string,
        created: string,
        image: string,
    ) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.url = url;
        this.created = created;
        this.image = image;
    }
}

export default Character;