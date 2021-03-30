import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Component } from 'react';
import firebase from './firebase';
import Spinner from './components/UI/Spinner';

class App extends Component {
  state = {
    isLoaded: false,
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
        isLoaded: true,
        transactions: newTransactions
      });
      // console.log(this.state.transactions)
    })
  }
  render() {
    let isLoaded = this.state.isLoaded;
    if (!isLoaded) {
      return <Spinner />
    } else {
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

}

export default App;
