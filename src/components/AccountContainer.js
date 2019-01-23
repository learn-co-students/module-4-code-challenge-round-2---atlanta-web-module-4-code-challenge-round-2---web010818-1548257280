import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchedTransactions: [],
      searchedWord: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({ transactions, searchedTransactions: transactions }))
  }

  handleChange = (event) => {
    let { searchedTransactions } = this.state 
    this.setState({
      searchedWord: event.target.value, 
      searchedTransactions: transactions.filter((trans) => {
        return trans.description.includes(event.target.value)
      })
    })
  }

  render() {
    return (
      <div>
        <Search value={this.state.searchedWord} onChange={this.handleChange} />
        <TransactionsList transactions={this.state.searchedTransactions} />
      </div>
    )
  }
}

export default AccountContainer
