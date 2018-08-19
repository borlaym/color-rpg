import Action from "../models/Action";
import ReduxAction, { ActionType } from "../models/ReduxAction";

export function attack(action: Action): ReduxAction<Action> {
	return {
		type: ActionType.ATTACK,
		payload: action
	}
}