import * as React from 'react';
import ColorCircle from './ColorCircle';
import Action from '../models/Action';
import './Action.css';

export default function ActionComponent(props: Action) {
	return (
		<div className="action">
			<div className="action__name">{props.name}</div>
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}