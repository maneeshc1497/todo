import React,{useState} from 'react'
import NewExpenseForm from './NewExpenseForm'
import  './NewExpense.css'
function NewExpense(props) {
    const [form,setForm]=useState(false)
    const onSubmitExpenseData=(expenseData)=>{
        const newExpense={
            ...expenseData,
            id:Math.floor(Math.random()+20).toString()
        }
        props.onaddExpense(newExpense)
        setForm(false)
    }
    
    const clickHandler=() => {
        setForm(true)
    }
    return (
        <div className="new-expense">
            
            {form ? <NewExpenseForm onsaveExpense={onSubmitExpenseData}/> : <button  onClick={clickHandler}>Add new Expense</button>}
            
        </div>
    )
}

export default NewExpense
