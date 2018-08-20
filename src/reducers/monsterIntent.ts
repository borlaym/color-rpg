import ReduxAction, { ActionType } from '../models/ReduxAction'
import Monster from '../models/Monster'
import MonsterIntent from '../models/MonsterIntent'

export default function MonsterIntentReducer(state: MonsterIntent, action: ReduxAction<any>, monster: Monster) {
	switch (action.type) {
		case ActionType.ATTACK: {
			if (action.payload.action.effect) {
				switch (action.payload.action.effect) {
					case 'Taunt': {
						return new MonsterIntent(state.attack, state.turnsLeft - 1, action.payload.character)
					}
					default:
						return new MonsterIntent(state.attack, state.turnsLeft - 1, state.target)
				}
			}
			return new MonsterIntent(state.attack, state.turnsLeft - 1, state.target)
		}
		default:
			return state
	}
}