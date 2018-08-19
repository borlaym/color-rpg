import { Color } from "../types";

export default class Action {
	constructor(
		public readonly name: string,
		public readonly colors: Color[]
	) {}
}