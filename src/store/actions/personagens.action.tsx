import { Personagem } from '../../type'

export const FETCH_PERSONAGENS_START = "FETCH_PERSONAGENS_START";
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITAR_PERSONAGENS = "FAVORITAR_PERSONAGENS";





export const  fetchPersonagemStarted = () => {
    return { type: FETCH_PERSONAGENS_START };
};

export const fetchPersonagemSuccess = (personagens: Personagem[]) => {
    return {
        type: FETCH_PERSONAGENS_SUCCESS,
        payload: { personagens },
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




export const fetchPersonagemThunk = () => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());    
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character'); 
        const json = await response.json(); 
        const jsonFilter = json.results.map((result) =>  ({...result, favorito: false}))      
        dispatch(fetchPersonagemSuccess(jsonFilter));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    }    
}

export const filterPersonagemThunk = (texto: string) => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`); 
        const json = await response.json();
        const jsonFilter = json.results.map((result) =>  ({...result, favorito: false}))          
        dispatch(fetchPersonagemSuccess(jsonFilter));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

export const fetchNextPageThunk = (pagina: number) => async (dispatch: any) => {    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`); 
        const json = await response.json();
        const jsonFilter = json.results.map((result) =>  ({...result, favorito: false}))                    
        dispatch(fetchPersonagemSuccess(jsonFilter));                

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

export const fetchPersonagemIDThunk = (id: number) => async (dispatch: any) => {    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`); 
        const json = await response.json();
        const jsonFilter = json.map((result) =>  ({...result, favorito: false}))                 
        dispatch(fetchPersonagemSuccess(jsonFilter));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

