import getAllCharacters from "../utils/CharacterParser";
import ReduxAction from "../models/ReduxAction";

const defaultState = getAllCharacters()
export default function CharactersReducer(state = defaultState, action: ReduxAction) {
	return state;
}