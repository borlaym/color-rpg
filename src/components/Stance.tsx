import * as React from 'react';
import Stance from '../models/Stance';
import ActionComponent from './Action';

export default function StanceComponent(props: Stance) {
	return (
		<div className="stance">
			<p>{props.name}</p>
			{props.actions.map((a, i) => <ActionComponent key={i} {...a} />)}
		</div>
	)
}