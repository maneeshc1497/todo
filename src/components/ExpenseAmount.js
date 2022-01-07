import React from 'react'
import   './ExpenseAmount.css'

function ExpenseAmount(props) {
    return (
        <div className="expense-amount">
            &#8377;{props.amount}
        </div>
    )
}

export default ExpenseAmount
