import Color from "./Color";
import monsterList from '../monsters.json';

interface MonsterAsJSON {
	name: string,
	health: string[]
}

export default class Monster {
	public static parse(name: string): Monster {
		const monsterData: MonsterAsJSON = monsterList.find((m: MonsterAsJSON) => m.name === name);
		if (!monsterData) {
			throw new Error('Monster not found among available monsters: ' + name);
		}
		const health: Color[] = monsterData.health.map(c => {
			if (!Color[c]) {
				throw new Error('Color not found: ' + c);
			}
			return Color[c]
		})
		return new Monster(monsterData.name, health)
	}
	constructor(
		public readonly name: string,
		public readonly health: Color[]
	) { }
}