import * as React from 'react';
import ColorCircle from './ColorCircle';
import Action from '../models/Action';

export default function ActionComponent(props: Action) {
	return (
		<div className="action">
			<p>{props.name}</p>
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}