const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchCharactersApi = async (page: number) => {
    try {
      const response = await fetch(`${BASE_URL}/character?page=${page}`);
      const data = await response.json();
      console.log('The current data is:', data)
      return data;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  };