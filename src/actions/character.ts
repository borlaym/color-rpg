import Action from "../models/Action";
import ReduxAction, { ActionType } from "../models/ReduxAction";
import Character from "../models/Character";

export function attack(action: Action, character: Character): ReduxAction<{ action: Action, character: Character }> {
	return {
		type: ActionType.ATTACK,
		payload: {
			action,
			character
		}
	}
}