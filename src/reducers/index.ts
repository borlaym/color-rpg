import ReduxAction, { ActionType } from '../models/ReduxAction'
import CharactersReducer from './characters';
import Character from '../models/Character';
import CurrentMonsterReducer from './currentMonster';
import TurnReducer from './turn';
import Monster from '../models/Monster';

const nullAction = {
	type: ActionType.NO_ACTION,
	payload: {}
}

const initialState = {
	characters: CharactersReducer(undefined, nullAction),
	currentMonster: CurrentMonsterReducer(undefined, nullAction),
	currentTurn: TurnReducer(undefined, nullAction)
}

export default function rootReducer(state: State = initialState, action: ReduxAction<any>): State {
	return {
		characters: CharactersReducer(state.characters, action),
		currentMonster: CurrentMonsterReducer(state.currentMonster, action),
		currentTurn: TurnReducer(state.currentTurn, action)
	}
}

export interface State {
	characters: Character[],
	currentMonster: Monster,
	currentTurn: number
}