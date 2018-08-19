import * as React from 'react';
import './ColorCircle.css';
import Color from '../models/Color';

export default function ColorCircle(props: { color: Color }) {
	return <div className="circle" style={{ backgroundColor: props.color }} />
}