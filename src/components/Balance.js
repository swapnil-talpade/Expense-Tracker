import React from 'react'

export const Balance = (props) => {
    const transactions = props.transactions;
    console.log('this is transaction')
    console.log(transactions)
    const amounts = Object.keys(transactions).map(transaction => transactions[transaction].amount);
    // console.log(`amount is  ${amounts}`)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
}
