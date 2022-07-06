export const FETCH_PERSONAGENS_START = "FETCH_PERSONAGENS_START";
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';



type Personagem = {
    id: number;
    name: string;
    image: number;  
}

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


export const fetchPersonagemThunk = () => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    await new Promise(resolve => setTimeout(resolve, 2500));
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character'); 
        const json = await response.json();          
        dispatch(fetchPersonagemSuccess(json.results));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    }    
}

export const filterPersonagemThunk = (texto: string) => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`); 
        const json = await response.json();          
        dispatch(fetchPersonagemSuccess(json.results));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

