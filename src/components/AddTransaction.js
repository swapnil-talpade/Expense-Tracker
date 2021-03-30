import React, { Component } from 'react';


class AddTransaction extends Component {

    onSubmitHandler = (e) => {
        e.preventDefault();
        const transaction = {
            text: this.textRef.value,
            amount: parseInt(this.amountRef.value)  //adding  + sign before amount also works
        }
        this.props.addTransaction(transaction);
        e.currentTarget.reset();
    }
    render() {
        return (
            <>
                <h3>Add new transaction</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" ref={textRef => { this.textRef = textRef }} placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        >Amount <br />
            (negative - expense, positive - income)</label
                        >
                        <input type="number" ref={amountRef => { this.amountRef = amountRef }} placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </>
        );
    }
}

export default AddTransaction;
