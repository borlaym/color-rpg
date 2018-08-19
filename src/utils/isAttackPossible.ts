import Action from "../models/Action";
import Monster from "../models/Monster";
import { isEqual } from 'lodash';

export default function isAttackPossible(action: Action, monster: Monster) {
	return isEqual(action.colors, monster.defense.slice(0, action.colors.length));
}