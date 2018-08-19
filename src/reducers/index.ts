import { combineReducers } from 'redux'
import CharactersReducer from './characters';
import Character from '../models/Character';

export default combineReducers({
	characters: CharactersReducer
})

export interface State {
	characters: Character[]
}