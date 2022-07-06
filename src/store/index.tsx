import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import { fetchPersonagensReducer } from "./reducers/fetchPersonagensReducer";



export const rootReducer = combineReducers({
    person: fetchPersonagensReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)), // Aqui vamos aplicar os middlewares
    
)

export default store;

/* const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    composeWithDevTools(),
    
    ));

export default store; */