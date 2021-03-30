import React from 'react';


export const Transaction = (props) => {

    // Get sign
    const sign = props.transaction.amount < 0 ? '-' : '+';

    return (
        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign} ${Math.abs(props.transaction.amount)}</span>
            <button className="delete-btn" onClick={() => props.deleteTransaction(props.transaction.id)}>x</button>
        </li >
    )
}
