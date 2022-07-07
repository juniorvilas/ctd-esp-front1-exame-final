import { FETCH_PERSONAGENS_START, FETCH_PERSONAGENS_SUCCESS, FETCH_PERSONAGENS_ERROR, FETCH_FAVORITO_PERSONAGENS, FAVORITAR_PERSONAGENS } from '../actions/personagens.action';


type ActionType = {
    type: string;
    payload?: any;
};

const initialState = {
    personagens: [],
    isFetching: false,
    errorMessage: undefined,
}

export const fetchPersonagensReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case FETCH_PERSONAGENS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_PERSONAGENS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: initialState.errorMessage,
                personagens: action.payload.personagens,
            }
        case FETCH_PERSONAGENS_ERROR:
            return {
                ...state,
                isFetching: false,
                personagens: initialState.personagens,
                errorMessage: action.payload,
            }
        case FETCH_FAVORITO_PERSONAGENS:
            return {
                ...state,
                isFetching: false,
                errorMessage: initialState.errorMessage,
                personagens: action.payload.filter((personagem: any) => (personagem.favorito) ?? personagem),
            }
        case FAVORITAR_PERSONAGENS:
            return {
                ...state,
                isFetching: false,
                errorMessage: initialState.errorMessage,
                personagens: [
                    state.personagens.filter((st) => st.id === action.payload ? { ...st, favorito: !st.favorito } : st),
                ],               
     
            }
    
        default:
            return state;
    }

}