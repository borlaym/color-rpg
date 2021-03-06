import * as React from 'react';
import './Monster.css';
import Monster from '../models/Monster';
import MonsterHealth from './MonsterHealth';

export default function MonsterComponent(props: Monster) {
	return (
		<div className="monster">
			<div className="monster__name">{props.name} ({props.health})</div>
			<MonsterHealth colors={props.defense.slice(0, 5)} />
		</div>
	)
}