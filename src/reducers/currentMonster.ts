import { getRandomMonster } from "../utils/parsers";
import ReduxAction, { ActionType } from "../models/ReduxAction";
import Monster from "../models/Monster";
import isAttackPossible from "../utils/isAttackPossible";

const defaultState = getRandomMonster()
export default function CurrentMonsterReducer(state = defaultState, action: ReduxAction<any>) {
	switch (action.type) {
		case ActionType.ATTACK: {
			const attackColors = action.payload.action.colors;
			const monsterFirstColors = state.health.slice(0, attackColors.length)
			if (isAttackPossible(action.payload.action, state)) {
				return new Monster(state.name, state.health.slice(attackColors.length))
			} else {
				throw new Error(`Attack not possible, monster health: ${monsterFirstColors}, attack: ${attackColors}`)
			}
		}
		default:
			return state;
	}
}