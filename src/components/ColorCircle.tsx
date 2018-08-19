import * as React from 'react';
import './ColorCircle.css';
import Color from '../models/Color';

export default function ColorCircle(props: { color: Color, large?: boolean }) {
	return <div className={`circle ${props.color} ${props.large && 'large'}`} />
}