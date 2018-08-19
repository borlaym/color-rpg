import { getAllCharacters } from "../utils/parsers";
import ReduxAction from "../models/ReduxAction";

const defaultState = getAllCharacters()
export default function CharactersReducer(state = defaultState, action: ReduxAction<any>) {
	return state;
}