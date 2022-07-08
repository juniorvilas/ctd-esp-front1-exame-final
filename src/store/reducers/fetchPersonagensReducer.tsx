import { FETCH_PERSONAGENS_START, FETCH_PERSONAGENS_SUCCESS, FETCH_PERSONAGEM_ID_SUCCESS, FETCH_PERSONAGENS_ERROR, FAVORITAR_PERSONAGENS } from '../actions/personagens.action';
import { Personagem } from '../../type';

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
                personagens: action.payload.personagens,
            }
        case FETCH_PERSONAGEM_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                personagem: action.payload,
            }
        case FETCH_PERSONAGENS_ERROR:
            return {
                ...state,
                isFetching: false,
                personagens: initialState.personagens,
                errorMessage: action.payload,
            }
        case FAVORITAR_PERSONAGENS:
            return {
                ...state,
                personagens: state.personagens.map((personagem: Personagem) => {
                    if (personagem.id !== action.payload) {
                        return personagem;
                    }
                    return {
                        ...personagem,
                        favorito: !personagem.favorito,
                    };
                })
            }

        default:
            return state;
    }

}