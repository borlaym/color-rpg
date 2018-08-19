import Color, { randomColor } from "./Color";
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
		const defense: Color[] = []
		for (let i = 0; i < 15; i++) {
			defense.push(randomColor())
		}
		return new Monster(monsterData.name, defense, monsterData.health)
	}
	constructor(
		public readonly name: string,
		public readonly defense: Color[],
		public readonly health: number
	) { }
}