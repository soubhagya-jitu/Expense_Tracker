import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [expense,setExpense] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }
    props.onAddExpense(expenseData)
    setExpense(false)
  }
  const onClickChangeHandler = ()=> {
    setExpense(true)
  }

  const stopEditingHandler=()=> {
    setExpense(false)
  }
  return (
    <div className="new-expense">
      {!expense && <button onClick={onClickChangeHandler}>Add expense</button>}
      {expense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpense