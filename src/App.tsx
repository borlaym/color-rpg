import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Character from './models/Character';
import { State } from './reducers';
import Monster from './models/Monster';
import MonsterComponent from './components/Monster';
import CharacterComponent from './components/Character';

interface Props {
	characters: Character[],
	currentMonster: Monster
}

function App(props: Props) {
	return (
		<div className="App">
			<MonsterComponent {...props.currentMonster} />
			<div className="characters">
				{props.characters.map((c: Character) => <CharacterComponent key={c.name} character={c} />)}
			</div>
		</div>
	);
}

export default connect(
	(state: State) => ({
		characters: state.characters,
		currentMonster: state.currentMonster
	})
)(App);
