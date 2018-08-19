import ReduxAction, { ActionType } from '../models/ReduxAction'
import CharactersReducer from './characters';
import Character from '../models/Character';
import MonsterIntent from '../models/MonsterIntent';
import CurrentMonsterReducer from './currentMonster';
import MonsterIntentReducer from './monsterIntent';
import TurnReducer from './turn';
import Monster from '../models/Monster';

const nullAction = {
	type: ActionType.NO_ACTION,
	payload: {}
}

const initialMonster = CurrentMonsterReducer(undefined, nullAction);
const initialCharacters = CharactersReducer(undefined, nullAction);
const initialState = {
	characters: initialCharacters,
	currentMonster: initialMonster,
	currentTurn: TurnReducer(undefined, nullAction),
	monsterIntent: MonsterIntentReducer(MonsterIntent.fromAttack(initialMonster.attacks[0], initialCharacters), nullAction, initialMonster)
}

export default function rootReducer(state: State = initialState, action: ReduxAction<any>): State {
	const monster = CurrentMonsterReducer(state.currentMonster, action)
	return {
		characters: CharactersReducer(state.characters, action),
		currentMonster: monster,
		currentTurn: TurnReducer(state.currentTurn, action),
		monsterIntent: MonsterIntentReducer(state.monsterIntent, action, monster)
	}
}

export interface State {
	characters: Character[],
	currentMonster: Monster,
	currentTurn: number,
	monsterIntent: MonsterIntent
}