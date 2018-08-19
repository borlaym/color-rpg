import { getRandomMonster } from "../utils/parsers";
import ReduxAction, { ActionType } from "../models/ReduxAction";
import { isEqual } from 'lodash';
import Monster from "../models/Monster";

const defaultState = getRandomMonster()
export default function CurrentMonsterReducer(state = defaultState, action: ReduxAction<any>) {
	switch (action.type) {
		case ActionType.ATTACK: {
			const attackColors = action.payload.colors;
			const monsterFirstColors = state.health.slice(0, attackColors.length)
			if (isEqual(attackColors, monsterFirstColors)) {
				return new Monster(state.name, state.health.slice(attackColors.length))
			} else {
				return state;
			}
		}
		default:
			return state;
	}
}