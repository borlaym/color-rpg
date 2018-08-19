import { getRandomMonster } from "../utils/parsers";
import ReduxAction, { ActionType } from "../models/ReduxAction";
import Monster from "../models/Monster";
import isAttackPossible from "../utils/isAttackPossible";
import { randomColor } from "../models/Color";

const defaultState = getRandomMonster()
export default function CurrentMonsterReducer(state = defaultState, action: ReduxAction<any>) {
	switch (action.type) {
		case ActionType.ATTACK: {
			const attack = action.payload.action
			const attackColors = action.payload.action.colors;
			const monsterFirstColors = state.defense.slice(0, attackColors.length)
			if (isAttackPossible(action.payload.action, state)) {
				let newMonster = new Monster(state.name, state.defense.slice(attackColors.length), state.health)
				// Apply effects
				if (attack.effect) {
					switch (attack.effect) {
						case 'Confuse': {
							// Randomize monster defense
							newMonster = new Monster(
								newMonster.name,
								newMonster.defense.map(() => randomColor()),
								newMonster.health
							)
						}
					}
				}
				return newMonster
			} else {
				throw new Error(`Attack not possible, monster health: ${monsterFirstColors}, attack: ${attackColors}`)
			}
		}
		default:
			return state;
	}
}