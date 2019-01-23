import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const API = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {

  state = {
    bank: []
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
    this.setState({data: event.target.value})
  }

  render() {
    console.log(this.state.bank)
    return (
      <div>
        <Search />
        <TransactionsList bank={this.state.bank} />
      </div>
    )
  }
}

export default AccountContainer
