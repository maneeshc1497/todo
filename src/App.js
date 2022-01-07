import React, { useState } from 'react'
import Expense from './components/Expense'
import NewExpense from './components/NewExpense/NewExpense'
import './App.css'
function App() {
  
  
  const [dataList,setDataList]=useState([])
  const onaddExpenseData=(exData)=>{    
    setDataList((prev)=>{     
      return [exData, ...prev]
    })
}
  
  return (
    <div className='app'>
      <div className='nav'> 
      <h4>TO DO APP</h4>
      </div>
      
      <NewExpense onaddExpense={onaddExpenseData}/>      
      <Expense dataExp={dataList} />
      
    </div>
  );
}

export default App;



