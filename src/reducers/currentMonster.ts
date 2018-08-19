import { getRandomMonster } from "../utils/parsers";
import ReduxAction from "../models/ReduxAction";

const defaultState = getRandomMonster()
export default function CurrentMonsterReducer(state = defaultState, action: ReduxAction) {
	return state;
}