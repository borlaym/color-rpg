import * as React from 'react';
import { Action } from '../types';
import ColorCircle from './ColorCircle';

export default function ActionComponent(props: Action) {
	return (
		<div className="action">
			<p>{props.name}</p>
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}