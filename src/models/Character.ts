import Stance from "./Stance";

export interface CharacterAsJSON {
	name: string,
	stances: Array<{
		name: string,
		actions: string[]
	}>
}

export default class Character {
	public static parse(json: CharacterAsJSON): Character {
		return new Character(json.name, json.stances.map(s => Stance.parse(s)))
	}
	private currentStanceIndex = 0;
	constructor(
		public readonly name: string,
		public readonly stances: Stance[]
	) {}

	public get currentStance(): Stance {
		return this.stances[this.currentStanceIndex]
	}
}