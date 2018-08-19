import * as React from 'react';
import Character from '../models/Character';
import StanceComponent from './Stance';
import ColorCircle from './ColorCircle'
import './Character.css';

export default function CharacterComponent(props: { character: Character }) {
	const character = props.character
	return (
		<div className="character">
			<div className="character__name">
				{character.name} ({character.health}) {character.colors.map(c => <ColorCircle key={c} color={c} />)}
			</div>
			<StanceComponent character={character} stance={character.currentStance} />
		</div>
	)
}