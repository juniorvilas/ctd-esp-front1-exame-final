export type ActionType = {
  type: string;
  payload?: any;
};


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

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}


export interface Api {
  info: Info,
  results: Personagem[]
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
      paginacao: Info;
      episodes: Episode[];
    }
  }
  