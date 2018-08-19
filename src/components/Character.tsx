import * as React from 'react';
import Character from '../models/Character';
import StanceComponent from './Stance';
import './Character.css';

export default function CharacterComponent(props: { character: Character }) {
	const character = props.character
	return (
		<div className="character">
			<div className="character__name">{character.name} ({character.health})</div>
			<StanceComponent character={character} stance={character.currentStance} />
		</div>
	)
}