import React,{useState} from 'react'
import './NewExpenseForm.css'

function NewExpenseForm(props) {
    const [enteredtitle,setEnteredTitle]=useState('')
    const [enteredamount,setEnteredAmount]=useState('')
    const [entereddate,setEnteredDate]=useState('')
    const titlechangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
    }
    const amountchangeHandler=(e)=>{
        setEnteredAmount(e.target.value)
    }
    const datechangeHandler=(e)=>{
        setEnteredDate(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()

        const expenseData={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
        }
        props.onsaveExpense(expenseData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }
    
    return (
        <form onSubmit={submitHandler}>
           <div className="new-expense__form">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input type="text" name="title" value={enteredtitle} onChange={titlechangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" name="amount" value={enteredamount} onChange={amountchangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" name="date" value={entereddate}  onChange={datechangeHandler}/>
               </div>               
           </div> 
           <div className="new-expense__action">
                <button >Cancel</button>
                <button >Submit</button>
           </div>
           
        </form>
    )
}

export default NewExpenseForm
