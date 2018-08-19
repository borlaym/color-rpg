import Color from "./Color";
import actionDictionary from '../actions.json';

interface ActionAsJSON {
	name: string,
	colors: string[]
}

export default class Action {
	static parse(name: string): Action {
		const actionData: ActionAsJSON = actionDictionary[name];
		if (!actionData) {
			throw new Error('Action not found among available actions: ' + name);
		}
		const colors: Color[] = actionData.colors.map(c => {
			if (!Color[c]) {
				throw new Error('Color not found: ' + c);
			}
			return Color[c]
		})
		return new Action(actionData.name, colors)
	}
	constructor(
		public readonly name: string,
		public readonly colors: Color[]
	) {}
}