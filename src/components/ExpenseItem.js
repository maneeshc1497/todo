import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseAmount from './ExpenseAmount'

function ExpenseItem(props) {

    return (
        <div className="expense_item">
            <ExpenseDate date={props.date} />
            <div className="expense_item__desc">
                <h2>{props.title}</h2>
                <ExpenseAmount amount={props.amount} />

            </div>  
            
            
            
        </div>
    )
}

export default ExpenseItem
