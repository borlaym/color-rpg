import MonsterAttack from './MonsterAttack'
import Character from './Character'

export default class MonsterIntent {
	constructor(
		public readonly attack: MonsterAttack,
		public readonly turnsLeft: number,
		public readonly target: Character
	) {}

	public static fromAttack(attack: MonsterAttack, allCharacters: Character[]): MonsterIntent {
		const rnd = Math.floor(Math.random() * allCharacters.length)
		return new MonsterIntent(attack, attack.turns, allCharacters[rnd])
	}
}