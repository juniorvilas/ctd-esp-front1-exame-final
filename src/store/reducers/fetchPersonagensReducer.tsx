import { FETCH_EPISODES, FETCH_PERSONAGENS_START, FETCH_PERSONAGENS_SUCCESS, FETCH_PERSONAGEM_ID_SUCCESS, FETCH_PERSONAGENS_ERROR, FAVORITAR_PERSONAGENS } from '../actions/personagens.action';
import { Info, Personagem, ActionType } from '../../type';



const initialState = {
    personagens: [],
    isFetching: false,
    errorMessage: undefined,
    episodes: [],
    personagem: {} as Personagem,
    paginacao: {} as Info,

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
                paginacao: action.payload.info,
                personagens: action.payload.results,
            }
        case FETCH_PERSONAGEM_ID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                personagem: action.payload,
            }
        case FETCH_EPISODES:
            return {
                ...state,
                episodes: action.payload,
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