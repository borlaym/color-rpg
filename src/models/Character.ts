import Stance from "./Stance";

export interface CharacterAsJSON {
	name: string,
	stances: Array<{
		name: string,
		actions: string[]
	}>,
	health: number
}

export default class Character {
	public static parse(json: CharacterAsJSON): Character {
		const parsedStances = json.stances.map(s => Stance.parse(s))
		return new Character(json.name, parsedStances, parsedStances[0], json.health)
	}
	constructor(
		public readonly name: string,
		public readonly stances: Stance[],
		public readonly currentStance: Stance,
		public readonly health: number
	) {}
}