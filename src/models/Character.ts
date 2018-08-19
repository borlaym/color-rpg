import Stance from "./Stance";
import Color from './Color';

export interface CharacterAsJSON {
	name: string,
	stances: Array<{
		name: string,
		actions: string[]
	}>,
	health: number,
	colors: string[]
}

export default class Character {
	public static parse(json: CharacterAsJSON): Character {
		const parsedStances = json.stances.map(s => Stance.parse(s))
		const colors: Color[] = json.colors.map(c => {
			if (!Color[c]) {
				throw new Error('Color not found: ' + c);
			}
			return Color[c]
		})
		return new Character(json.name, parsedStances, parsedStances[0], json.health, colors)
	}
	constructor(
		public readonly name: string,
		public readonly stances: Stance[],
		public readonly currentStance: Stance,
		public readonly health: number,
		public readonly colors: Color[]
	) {}
}