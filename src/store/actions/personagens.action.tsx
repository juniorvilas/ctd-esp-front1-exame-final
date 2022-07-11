import { Api, Personagem, Episode } from '../../type'

export const FETCH_PERSONAGENS_START = "FETCH_PERSONAGENS_START";
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITAR_PERSONAGENS = "FAVORITAR_PERSONAGENS";
export const FETCH_PERSONAGEM_ID_SUCCESS = "FETCH_PERSONAGEM_ID_SUCCESS";
export const FETCH_EPISODES = "FETCH_EPISODES";



export const  fetchPersonagemStarted = () => {
    return { type: FETCH_PERSONAGENS_START };
};

export const fetchPersonagemSuccess = (data: Api) => {
    return {
        type: FETCH_PERSONAGENS_SUCCESS,
        payload:  data ,
    }
}

export const fetchPersonagemError = (errorMessage: string) => {
    return {
        type: FETCH_PERSONAGENS_ERROR,
        payload: { errorMessage },
    }
}



export const favoritarPersonagens = (id: number) => {

    return { 
        type: FAVORITAR_PERSONAGENS,
        payload: id,
    }   

}

export const fetchPersonagemIDSuccess = (personagem: Personagem) => {
    return {
        type: FETCH_PERSONAGEM_ID_SUCCESS,
        payload: { personagem },
    }
}


export const fetchEpisodes = (episodes: Episode[]) => {
    return {
        type: FETCH_EPISODES,
        payload: episodes,
    }

}




export const fetchPersonagemThunk = () => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());    
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character'); 
        const json = await response.json(); 
        const jsonFilter = json.results.map((result: Personagem) =>  ({...result, favorito: false}))      
        dispatch(fetchPersonagemSuccess({info: json.info, results: jsonFilter}));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    }    
}

export const filterPersonagemThunk = (texto: string) => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`); 
        const json = await response.json();
        const jsonFilter = json.results.map((result: Personagem) =>  ({...result, favorito: false}))          
        dispatch(fetchPersonagemSuccess({info: json.info, results: jsonFilter}));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

export const fetchNextPageThunk = (url: string) => async (dispatch: any) => {    
    try {
        const response = await fetch(url); 
        const json = await response.json();
        const jsonFilter = json.results.map((result: Personagem) =>  ({...result, favorito: false}))                    
        dispatch(fetchPersonagemSuccess({info: json.info, results: jsonFilter}));                 

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

export const fetchPersonagemIDThunk = (id: number) => async (dispatch: any) => {      
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`); 
        const json = await response.json();                     
        dispatch(fetchPersonagemIDSuccess(json));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 


export const fetchEpisodesThunk = (arrayEp: string[]) => async (dispatch: any) => {    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${arrayEp}`); 
        const json = await response.json();                     
        dispatch(fetchEpisodes(json));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 