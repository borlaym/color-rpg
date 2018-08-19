import * as React from 'react';
import ColorCircle from './ColorCircle';
import Action from '../models/Action';
import './Action.css';
import { connect } from 'react-redux';
import { attack } from '../actions/character';
import isAttackPossible from '../utils/isAttackPossible';
import { State } from '../reducers';
import Monster from '../models/Monster';

function ActionComponent(props: { action: Action, monster: Monster, onClick: (action: Action) => void}) {
	const attackPossible = isAttackPossible(props.action, props.monster)
	const clickHandler = attackPossible ? () => props.onClick(props.action) : undefined
	return (
		<div className={`action ${!attackPossible && 'inactive'}`} onClick={clickHandler}>
			<div className="action__name">{props.action.name}</div>
			{props.action.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
		</div>
	)
}

export default connect(
	(state: State) => ({ monster: state.currentMonster }),
	(dispatch) => ({
		onClick: (action: Action) => dispatch(attack(action))
	})
)(ActionComponent)