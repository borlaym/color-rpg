export interface MonsterAttackAsJSON {
	name: string,
	damage: number,
	turns: number
}

export default class MonsterAttack {
	public static parse(json: MonsterAttackAsJSON): MonsterAttack {
		return new MonsterAttack(json.name, json.damage, json.turns)
	}
	constructor(
		public readonly name: string,
		public readonly damage: number,
		public readonly turns: number,
	) { }
}