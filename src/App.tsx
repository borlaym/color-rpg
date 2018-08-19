import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Character from './models/Character';
import StanceComponent from './components/Stance';
import { State } from './reducers';

interface Props {
	characters: Character[]
}

function App(props: Props) {
	return (
		<div className="App">
			{props.characters.map((c: Character) => <StanceComponent key={c.name} {...c.stances[0]} />)}
		</div>
	);
}

export default connect(
	(state: State) => ({
		characters: state.characters
	})
)(App);
