export enum ActionType {
	ATTACK
}

export default ActionType

export default interface ReduxAction<T> {
	type: ActionType,
	payload: T
}