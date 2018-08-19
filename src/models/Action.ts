import Color from "./Color";
import actionList from '../actions.json';

interface ActionAsJSON {
	name: string,
	colors: string[],
	toStance: string
}

export default class Action {
	public static parse(name: string): Action {
		const actionData: ActionAsJSON = actionList.find((a: ActionAsJSON) => a.name === name);
		if (!actionData) {
			throw new Error('Action not found among available actions: ' + name);
		}
		const colors: Color[] = actionData.colors.map(c => {
			if (!Color[c]) {
				throw new Error('Color not found: ' + c);
			}
			return Color[c]
		})
		return new Action(actionData.name, colors, actionData.toStance)
	}
	constructor(
		public readonly name: string,
		public readonly colors: Color[],
		public readonly toStance: string
	) {}
}