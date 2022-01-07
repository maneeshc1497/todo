import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'

import ExpenseFilter from './ExpenseFilter'
import './Expense.css'
function Expense(props) {
    const [filterYear,setFilterYear]=useState('2021')
    
    const onFilterChange=(filterData)=>{
        setFilterYear(filterData)    
    }
    const array= props.dataExp.filter(e=>{
        return e.date.getFullYear().toString() === filterYear
    })
    return (
        <div>
                  
            <div className="expense">            
                <ExpenseFilter selected={filterYear} onFilter={onFilterChange}/>
                
                {array.length ===0 ? <h3>No Item Please add item</h3> : array.map((ex) => (<ExpenseItem title={ex.title} amount={ex.amount} date={ex.date}/>)) }
                
                
            </div>
        </div>
        
    )
}

export default Expense
