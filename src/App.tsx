import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Character from './models/Character';
import StanceComponent from './components/Stance';
import { State } from './reducers';
import Monster from './models/Monster';
import MonsterHealth from './components/MonsterHealth';

interface Props {
	characters: Character[],
	currentMonster: Monster
}

function App(props: Props) {
	return (
		<div className="App">
			<p>{props.currentMonster.name}</p>
			<MonsterHealth colors={props.currentMonster.health} />
			{props.characters.map((c: Character) => <StanceComponent key={c.name} {...c.stances[0]} />)}
		</div>
	);
}

export default connect(
	(state: State) => ({
		characters: state.characters,
		currentMonster: state.currentMonster
	})
)(App);
