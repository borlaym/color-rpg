import characters from '../characters.json';
import monsters from '../monsters.json';
import Character, { CharacterAsJSON } from '../models/Character';
import Monster, { MonsterAsJSON } from '../models/Monster';

export function getAllCharacters(): Character[] {
	if (characters instanceof Array) {
		return characters.map((char: CharacterAsJSON) => Character.parse(char))
	}
	return []
}

const allMonsters = monsters instanceof Array ? monsters.map((monster: MonsterAsJSON) => Monster.parse(monster.name)) : []

export function getRandomMonster(): Monster {
	return allMonsters[0]
}