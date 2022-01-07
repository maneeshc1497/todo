import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {
    const ondropDownHandler=(e)=>{
        props.onFilter(e.target.value)
    }
    return (
        <div className="expense-filter">
            <label>Filter by Year</label>        
            <select value={props.selected} onChange={ondropDownHandler}>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
