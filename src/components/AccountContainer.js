import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
    state = {
      allObjects: [],
      searchTerm: ""
    }

    fetchData = () => {
      fetch("https://boiling-brook-94902.herokuapp.com/transactions")
        .then(res => res.json())
        .then(data => this.setState({ allObjects: data }))
    }

  componentDidMount() {
    this.fetchData()
  }

  handleSearchChange = (e, object) => {
  this.setState({ searchTerm: e.target.value })
  console.log(e.target.value)
}

  render() {
    let filtered = this.state.allObjects.filter(object => object.description.includes(this.state.searchTerm))
    console.log(filtered)

    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange}/>
        <TransactionsList allObjects={filtered}/>
      </div>
    )
  }
}

export default AccountContainer
