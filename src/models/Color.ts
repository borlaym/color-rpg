import { every } from 'lodash';

enum Color {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
	Yellow = 'yellow',
	Any = 'any',
	Colorless = 'colorless'
}

export function colorsMatch(color1: Color, color2: Color) {
	return color1 === color2 || color1 === Color.Any || color2 === Color.Any
}

export function arraysOfColorsMatch(a1: Color[], a2: Color[]) {
	return every(a1, (c, i) => colorsMatch(c, a2[i]))
}

export default Color