import * as React from 'react';
import ColorCircle from './ColorCircle';
import Action from '../models/Action';
import './Action.css';
import { connect } from 'react-redux';
import { attack } from '../actions/character';

function ActionComponent(props: { action: Action, onClick: (action: Action) => void}) {
	return (
		<div className="action" onClick={() => props.onClick(props.action)}>
			<div className="action__name">{props.action.name}</div>
			{props.action.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}

export default connect(
	null,
	(dispatch) => ({
		onClick: (action: Action) => dispatch(attack(action))
	})
)(ActionComponent)