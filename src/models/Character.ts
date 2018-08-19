import Stance from "./Stance";

export interface CharacterAsJSON {
	name: string,
	stances: Array<{
		name: string,
		actions: string[]
	}>
}

export default class Character {
	static parse(json: CharacterAsJSON): Character {
		return new Character(json.name, json.stances.map(s => Stance.parse(s)))
	}
	constructor(
		public readonly name: string,
		public readonly stances: Stance[]
	) {}
}