import * as React from 'react';
import Stance from '../models/Stance';
import ActionComponent from './Action';
import './Stance.css';

export default function StanceComponent(props: Stance) {
	return (
		<div className="stance">
			<div className="stance__name">{props.name}</div>
			{props.actions.map((a, i) => <ActionComponent key={i} {...a} />)}
		</div>
	)
}