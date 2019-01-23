import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.object.posted_at}</td>
      <td>{props.object.description}</td>
      <td>{props.object.category}</td>
      <td>{props.object.amount}</td>
    </tr>
  )
}

export default Transaction
