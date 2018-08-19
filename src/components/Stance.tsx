import * as React from 'react';
import Stance from '../models/Stance';
import ActionComponent from './Action';
import './Stance.css';
import Character from '../models/Character';

interface Props {
	stance: Stance,
	character: Character
}

export default function StanceComponent(props: Props) {
	return (
		<div className="stance">
			<div className="stance__name">{props.stance.name}</div>
			{props.stance.actions.map((a, i) => <ActionComponent character={props.character} key={i} action={a} />)}
		</div>
	)
}