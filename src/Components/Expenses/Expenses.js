import React, {useState} from 'react'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState("2021")

  const filterChnageHandler = (selectedYear)=> {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onChangeHandler = {filterChnageHandler}/>
           {props.value.map((index,id) => {
        return <ExpenseItem  title={index.title} amount={index.amount} date={index.date} key={id}></ExpenseItem>
      })}
    </Card>
  )
}

export default Expenses