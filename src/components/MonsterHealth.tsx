import * as React from 'react';
import { Color } from '../types';
import ColorCircle from './ColorCircle';

export default function MonsterHealth(props: { colors: Color[] }) {
	return (
		<div className="monster-health">
			{props.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}