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
			let newState = [...state];
			// Change stances if we need
			if (attack.toStance) {
				const newStance = character.stances.find((s: Stance) => s.name === attack.toStance)
				if (!newStance) {
					throw new Error('Stance not found: ' + attack.toStance + ' when performing attack: ' + attack.name)
				}
				newState = [
					...newState.slice(0, indexOfCharacter),
					new Character(character.name, character.stances, newStance, character.health, character.colors),
					...newState.slice(indexOfCharacter + 1)
				]
			}
			// Apply effects
			if (attack.effect) {
				switch (attack.effect) {
					case 'Battlecry': {
						// Put everyone into offensive stance
						newState = newState.map((c: Character) => {
							const newStance = c.stances.find((s: Stance) => s.name === "Offensive");
							if (!newStance) {
								throw new Error('Offensive stance not found while Battlecry')
							}
							return new Character(c.name, c.stances, newStance, c.health, c.colors)
						})
						break;
					}
					case 'Ice Barrier': {
						console.log(attack.effect)
						// Put everyone into defensive stance
						newState = newState.map((c: Character) => {
							const newStance = c.stances.find((s: Stance) => s.name === "Defensive");
							if (!newStance) {
								throw new Error('Defensive stance not found while Ice Barrier')
							}
							return new Character(c.name, c.stances, newStance, c.health, c.colors)
						})
						break;
					}
				}
			}
			return newState
		}
		default:
			return state;
	}
}