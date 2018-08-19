export enum Color {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
	Yellow = 'yellow'
}

export interface Action {
	name: string,
	colors: Color[]
}

export interface Stance {
	name: string,
	actions: Action[]
}