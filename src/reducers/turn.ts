import ReduxAction, { ActionType } from '../models/ReduxAction'

export default function TurnReducer(state = 0, action: ReduxAction<any>) {
	switch (action.type) {
		case ActionType.ATTACK:
			return state + 1
		default:
			return state
	}
}