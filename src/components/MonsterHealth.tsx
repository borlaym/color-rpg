import * as React from 'react';
import ColorCircle from './ColorCircle';
import Color from '../models/Color';

export default function MonsterHealth(props: { colors: Color[] }) {
	return (
		<div className="monster-health">
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}