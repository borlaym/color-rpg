import characters from '../characters.json';
import Character, { CharacterAsJSON } from '../models/Character';

export default function getAllCharacters(): Character[] {
	if (characters instanceof Array) {
		return characters.map((char: CharacterAsJSON) => Character.parse(char))
	}
	return []
}