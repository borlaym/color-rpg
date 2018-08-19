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
		const parsedStances = json.stances.map(s => Stance.parse(s))
		return new Character(json.name, parsedStances, parsedStances[0])
	}
	constructor(
		public readonly name: string,
		public readonly stances: Stance[],
		public readonly currentStance: Stance
	) {}
}