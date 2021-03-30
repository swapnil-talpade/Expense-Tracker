import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Component } from 'react';
import firebase from './firebase';

class App extends Component {
  state = {
    transactions: []
  }

  addTransaction = (transaction) => {
    console.log('adding trnasaction');
    const transactionRef = firebase.database().ref('transactions');
    transactionRef.push(transaction);
  }

  deleteTransaction = (index) => {
    console.log(` deleting transaction ${index}`)
    const itemRef = firebase.database().ref(`/transactions/${index}`);
    itemRef.remove();


  }



  componentDidMount() {
    console.log('mounted');
    const transactionRef = firebase.database().ref('/transactions');
    // console.log(transactionRef)
    transactionRef.on('value', (snapshot) => {
      let transations = snapshot.val();
      let newTransactions = [];
      for (let transation in transations) {
        newTransactions.push({
          id: transation,
          amount: transations[transation].amount,
          text: transations[transation].text
        });
      }
      console.log('starts here')
      console.log(newTransactions)
      this.setState({
        transactions: newTransactions
      });
      // console.log(this.state.transactions)
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Balance transactions={this.state.transactions} />
          <IncomeExpenses transactions={this.state.transactions} />
          <TransactionList transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />
          <AddTransaction
            transactions={this.state.transactions}
            addTransaction={this.addTransaction} />
        </div>
      </div>
    );
  }

}

export default App;
