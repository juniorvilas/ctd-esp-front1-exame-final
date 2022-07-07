import { combineReducers } from 'redux';
import { fetchPersonagensReducer } from '../reducers/fetchPersonagensReducer';

const reducers = combineReducers({
  person: fetchPersonagensReducer,
})

export default reducers;