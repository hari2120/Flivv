import React from 'react'
import "./homeItem.scss"
import {useDispatch} from 'react-redux'

import { useSelector } from 'react-redux';
import { deleteExpense, editExpense } from '../../features/expense/ExpenseSlice';



const HomeItem = ({ title, desc, amount, id, date}) => {
    
    const deleteDispatch = useDispatch()
    const editDispatch = useDispatch()

    return (
        <div className="homeitem-container">
            <div className="left-container">
                <div className="expense-heading">
                    <p>{title}</p>
                </div>
                <div className="expense-description">
                    <p>{desc}</p>
                </div>
                <div className="epense-date">
                    <p>{date}</p>
                </div>
            </div>
            <div className="right-container">
                <div className="expense-amount">
                    <p>$ {amount} </p>
                </div>
                <div className="buttons">
                    <button onClick={(e) => editDispatch(editExpense(id))}>Edit</button>
                    <button onClick={(e) => deleteDispatch(deleteExpense(id))} >Delete</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default HomeItem
