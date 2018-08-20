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

function applyMonsterAttack(state: State): State {
	const intent = state.monsterIntent
	const characters = state.characters
	if (intent.turnsLeft === 0) {
		const target = state.characters.find(c => c.name === intent.target.name)
		if (!target) {
			throw new Error('Target not found for monster attack')
		}
		const targetIndex = state.characters.indexOf(target)
		const newCharacters = [
			...characters.slice(0, targetIndex),
			new Character(target.name, target.stances, target.currentStance, target.health - intent.attack.damage, target.colors),
			...characters.slice(targetIndex + 1)
		]
		console.log(newCharacters)
		const newAttackIndex = Math.floor(Math.random() * state.currentMonster.attacks.length)
		const newIntent = MonsterIntent.fromAttack(state.currentMonster.attacks[newAttackIndex], newCharacters)
		return {
			...state,
			characters: newCharacters,
			monsterIntent: newIntent
		}
	}
	return state
}

export default function rootReducer(state: State = initialState, action: ReduxAction<any>): State {
	const monster = CurrentMonsterReducer(state.currentMonster, action)
	const newState = {
		characters: CharactersReducer(state.characters, action),
		currentMonster: monster,
		currentTurn: TurnReducer(state.currentTurn, action),
		monsterIntent: MonsterIntentReducer(state.monsterIntent, action, monster)
	}
	return applyMonsterAttack(newState)
}

export interface State {
	characters: Character[],
	currentMonster: Monster,
	currentTurn: number,
	monsterIntent: MonsterIntent
}