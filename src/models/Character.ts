import Stance from "./Stance";

export interface CharacterAsJSON {
	name: string,
	stances: Array<{
		name: string,
		actions: string[]
	}>
}

export default class Character {
	static parse(json: CharacterAsJSON, actionDictionary: {}): Character {
		return new Character(json.name, [])
	}
	constructor(
		public readonly name: string,
		public readonly stances: Stance[]
	) {}
}