import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"

const ExpenseList = (props) => {

    if (props.value.length === 0) {
        return <p className="expenses-list__fallback">No expense found</p>
    }
    return (
        <li className="expenses-list">
            {props.value.map((index, id)=><ExpenseItem title={index.title} amount={index.amount} date={index.date} key={id}></ExpenseItem>)}
        </li>
    )
}

export default ExpenseList