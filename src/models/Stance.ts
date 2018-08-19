import Action from "./Action";

interface StanceAsJSON {
	name: string,
	actions: string[]
}
export default class Stance {
	static parse(json: StanceAsJSON): Stance {
		return new Stance(json.name, json.actions.map(a => Action.parse(a)))
	}
	constructor(
		public readonly name: string,
		public readonly actions: Action[]
	) {}
}