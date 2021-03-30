import React from 'react'
import { Transaction } from './Transaction';


export const TransactionList = (props) => {
    const transactions = props.transactions;

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {Object.keys(transactions).map(transaction => (
                    <Transaction
                        key={transaction}
                        index={transaction}
                        transaction={transactions[transaction]}
                        deleteTransaction={props.deleteTransaction} />))}
            </ul>
        </>
    )
}
