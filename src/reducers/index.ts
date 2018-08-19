import { combineReducers } from 'redux'
import CharactersReducer from './characters';
import Character from '../models/Character';
import CurrentMonsterReducer from './currentMonster';
import Monster from '../models/Monster';

export default combineReducers({
	characters: CharactersReducer,
	currentMonster: CurrentMonsterReducer
})

export interface State {
	characters: Character[],
	currentMonster: Monster
}