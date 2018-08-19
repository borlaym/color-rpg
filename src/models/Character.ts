import Stance from "./Stance";

export default class Character {
	constructor(
		public readonly name: string,
		public readonly stances: Stance[]
	) {}
}