import {FETCH_PERSONAGENS_START, FETCH_PERSONAGENS_SUCCESS, FETCH_PERSONAGENS_ERROR } from '../actions/personagens.action';
 

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
        default:
            return state;
    }

}