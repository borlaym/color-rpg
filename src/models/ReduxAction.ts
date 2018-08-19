export enum ActionType {
	NO_ACTION,
	ATTACK
}

export default ActionType

export default interface ReduxAction<T> {
	type: ActionType,
	payload: T
}