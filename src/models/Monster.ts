import Color from "./Color";
import monsterList from '../monsters.json';

export interface MonsterAsJSON {
	name: string,
	defense: string[],
	health: number
}

export default class Monster {
	public static parse(name: string): Monster {
		const monsterData: MonsterAsJSON = monsterList.find((m: MonsterAsJSON) => m.name === name);
		if (!monsterData) {
			throw new Error('Monster not found among available monsters: ' + name);
		}
		const health: Color[] = monsterData.defense.map(c => {
			if (!Color[c]) {
				throw new Error('Color not found: ' + c);
			}
			return Color[c]
		})
		return new Monster(monsterData.name, health, monsterData.health)
	}
	constructor(
		public readonly name: string,
		public readonly defense: Color[],
		public readonly health: number
	) { }
}