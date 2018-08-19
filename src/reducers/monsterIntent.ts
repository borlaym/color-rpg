import ReduxAction, { ActionType } from '../models/ReduxAction'
import Monster from '../models/Monster'
import MonsterIntent from '../models/MonsterIntent'

export default function MonsterIntentReducer(state: MonsterIntent, action: ReduxAction<any>, monster: Monster) {
	switch (action.type) {
		case ActionType.ATTACK:
			return new MonsterIntent(state.attack, state.turnsLeft - 1, state.target)
		default:
			return state
	}
}