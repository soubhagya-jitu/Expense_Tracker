import React, { useState } from 'react'
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2021")

  const filterChnageHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.value.filter((ele) => {
    return ele.date.getFullYear().toString() === filteredYear
  })


  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeHandler={filterChnageHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList value = {filteredExpenses}/>
    </Card>
  )
}

export default Expenses