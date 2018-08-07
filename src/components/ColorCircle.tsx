import * as React from 'react';
import { Color } from '../types';
import './ColorCircle.css';

export default function ColorCircle(props: { color: Color }) {
	return <div className="circle" style={{ backgroundColor: props.color }} />
}