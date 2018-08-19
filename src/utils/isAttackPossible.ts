import Action from "../models/Action";
import Monster from "../models/Monster";
import { isEqualWith } from 'lodash';
import { arraysOfColorsMatch } from "../models/Color";

export default function isAttackPossible(action: Action, monster: Monster) {
	return isEqualWith(action.colors, monster.defense.slice(0, action.colors.length), arraysOfColorsMatch);
}