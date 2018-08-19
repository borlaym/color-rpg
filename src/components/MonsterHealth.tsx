import * as React from 'react';
import ColorCircle from './ColorCircle';
import Color from '../models/Color';
import './MonsterHealth.css';

export default function MonsterHealth(props: { colors: Color[] }) {
	return (
		<div className="monster-health">
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} large={i === 0} />)}
		</div>
	)
}