import * as React from 'react';
import ColorCircle from './ColorCircle';
import Action from '../models/Action';
import './Action.css';
import { connect } from 'react-redux';
import { attack } from '../actions/character';
import isAttackPossible from '../utils/isAttackPossible';
import { State } from '../reducers';
import Monster from '../models/Monster';
import Character from '../models/Character';

const effectDescriptions = {
	"Battlecry": "Move everyone to Offensive stance"
}

interface Props {
	action: Action,
	monster: Monster,
	character: Character,
	onClick: (action: Action, character: Character) => void
}

function ActionComponent(props: Props) {
	const attackPossible = isAttackPossible(props.action, props.monster)
	const clickHandler = attackPossible ? () => props.onClick(props.action, props.character) : undefined
	return (
		<div className={`action ${!attackPossible && 'inactive'}`} onClick={clickHandler}>
			<div className="action__name">{props.action.name}</div>
			{props.action.colors.map((c, i) => <ColorCircle key={i} color={c} />)}
			{props.action.toStance ? ('--> ' + props.action.toStance) : null}
			{props.action.effect && <span className="action__description">{effectDescriptions[props.action.effect]}</span>}
		</div>
	)
}

export default connect(
	(state: State) => ({ monster: state.currentMonster }),
	(dispatch) => ({
		onClick: (action: Action, character: Character) => dispatch(attack(action, character))
	})
)(ActionComponent)