import Action from "./Action";

export default class Stance {
	constructor(
		public readonly name: string,
		public readonly actions: Action[]
	) {}
}