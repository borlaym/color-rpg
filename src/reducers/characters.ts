import { getAllCharacters } from "../utils/parsers";
import ReduxAction, { ActionType } from "../models/ReduxAction";
import Character from "../models/Character";
import Stance from "../models/Stance";

const defaultState = getAllCharacters()
export default function CharactersReducer(state = defaultState, action: ReduxAction<any>) {
	switch (action.type) {
		case ActionType.ATTACK: {
			const character = action.payload.character;
			const attack = action.payload.action;
			const indexOfCharacter = state.indexOf(character)
			// Change stances if we need
			if (attack.toStance) {
				const newStance = character.stances.find((s: Stance) => s.name === attack.toStance)
				if (!newStance) {
					throw new Error('Stance not found: ' + attack.toStance + ' when performing attack: ' + attack.name)
				}
				return [
					...state.slice(0, indexOfCharacter),
					new Character(character.name, character.stances, newStance),
					...state.slice(indexOfCharacter + 1)
				]
			}
			return state
		}
		default:
			return state;
	}
}