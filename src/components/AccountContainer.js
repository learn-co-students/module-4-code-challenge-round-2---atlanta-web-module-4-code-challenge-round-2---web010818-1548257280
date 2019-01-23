import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const API = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {

  state = {
    bank: [],
    search: ''
  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({bank: data}))
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  render() {

    let filterAccount = this.state.bank.filter(account => account.description.includes(this.state.search) || account.category.includes(this.state.search))

    return (
      <div>
        <Search search={this.state.search} handleChange={this.handleChange} />
        <TransactionsList bank={filterAccount} />
      </div>
    )
  }
}

export default AccountContainer
