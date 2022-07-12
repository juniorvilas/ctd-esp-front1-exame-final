import { Api, Personagem, Episode, ActionType } from '../../type'

export const FETCH_PERSONAGENS_START = "FETCH_PERSONAGENS_START";
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITAR_PERSONAGENS = "FAVORITAR_PERSONAGENS";
export const FETCH_PERSONAGEM_ID_SUCCESS = "FETCH_PERSONAGEM_ID_SUCCESS";
export const FETCH_EPISODES = "FETCH_EPISODES";

/**
 * Função para iniciar API e fazer um load na página
 * @function fetchPersonagemStarted
 * @returns { ActionType } só retorna um estado que já estava (...state) e isFetching: true
 */
export const  fetchPersonagemStarted = (): ActionType => {
    return { type: FETCH_PERSONAGENS_START };
};

/**
 * Função para pegar os personagens e paginação na API
 * @function fetchPersonagemSuccess
 * @param { Api } data Objeto da Api que passa dados dos personagens e da paginação
 * @returns { ActionType } retorna o payload com array de personagens e a paginação
 */
export const fetchPersonagemSuccess = (data: Api): ActionType => {
    return {
        type: FETCH_PERSONAGENS_SUCCESS,
        payload:  data ,
    }
}

/**
 * Função para retornar um errorMessage caso algo de errado.
 * @function fetchPersonagemError
 * @param { string } errorMessage mensagem de erro
 * @returns { ActionType } retorna o payload com a string da mensagem de erro
 */
export const fetchPersonagemError = (errorMessage: string): ActionType => {
    return {
        type: FETCH_PERSONAGENS_ERROR,
        payload: { errorMessage },
    }
}

/**
 * Função que muda o estado favorito do personagem para true ou false
 * @function favoritarPersonagens
 * @param { number } id parametro id que recebe para saber qual personagem mudar
 * @returns { ActionType } retorna o payload com id do personagem
 */
export const favoritarPersonagens = (id: number): ActionType => {

    return { 
        type: FAVORITAR_PERSONAGENS,
        payload: id,
    }   

}

/**
 * Função que retorna apenas um personagem especifico
 * @function fetchPersonagemIDSuccess
 * @param { Personagem } personagem parametro do tipo { Personagem }
 * @returns { ActionType } retorna um payload do tipo Personagem
 */
export const fetchPersonagemIDSuccess = (personagem: Personagem): ActionType => {
    return {
        type: FETCH_PERSONAGEM_ID_SUCCESS,
        payload: { personagem },
    }
}

/**
 * Função que retorna todos os episodios de um personagem
 * @function fetchEpisodes
 * @param { Episode[] } episodes parametro array de episodios do tipo { Episode[] }
 * @returns { ActionType } retorna um payload array de episodios do tipo { Episode[] }
 */
export const fetchEpisodes = (episodes: Episode[]): ActionType => {
    return {
        type: FETCH_EPISODES,
        payload: episodes,
    }

}

/**
 * Função que faz uma requisição na API buscando por todos personagens sendo que retorna 1 pagina com 20, acrescenta o favorito: false em todos
 * ela também retorna a paginação e passa por payload para a função fetchPersonagemSuccess
 * @function fetchPersonagemThunk
 * @async parametro dispatch
 * @returns função retorna os 20 primeiros personagens em .results e a paginação em .info
 */
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

/**
 * Função que faz uma requisição na API de acordo com o nome passado por parametro
 * @function filterPersonagemThunk
 * @param { string } texto parametro para poder obter o personagem buscado por filtro
 * @async
 * @returns retorna o personagem buscado por parametro
 */
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

/**
 * Função que recebe a url e faz um fetch mudando a pagina
 * @function fetchNextPageThunk
 * @param { string } url parametro da nova pagina a ser carregada
 * @async 
 * @returns retorna uma nova pagina e passa os novos personagens dessa pagina na fetchPersonagemSuccess
 */
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


/**
 * Função que retorna apenas um Personagem de acordo com id passado por parametro
 * @function fetchPersonagemIDThunk
 * @param { number } id parametro para buscar o personagem
 * @async 
 * @returns retorna o personagem e passa por payload para fetchPersonagemIDSuccess
 */
export const fetchPersonagemIDThunk = (id: number) => async (dispatch: any) => {      
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`); 
        const json = await response.json();                     
        dispatch(fetchPersonagemIDSuccess(json));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 

/**
 * Função que busca por todos episodios de um determinado personagem
 * @function fetchEpisodesThunk
 * @param { string[] } arrayEp parametro um array de strings de um determinado personagem
 * @async 
 * @returns retorna esses episodios do personagem especifico e passa para fetchEpisodes
 */
export const fetchEpisodesThunk = (arrayEp: string[]) => async (dispatch: any) => {    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${arrayEp}`); 
        const json = await response.json();                     
        dispatch(fetchEpisodes(json));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
} 