export interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: object;
    location: object;
    image: string;
    episode: string;
    url: string;
    created: string;
    favorito: boolean;
  }

  export type GlobalState = {
    person: {
      personagens: {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: object;
        location: object;
        image: string;
        episode: string;
        url: string;
        created: string;
        favorito: boolean;
       
      }[];
      isFetching: boolean;
      errorMessage: string;
    }
  }
  