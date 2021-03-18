import React from 'react'
import "./Home.scss"
import HomeItem from './HomeItem'

import {useDispatch} from 'react-redux'

import "./homeItem.scss"

import { useSelector } from 'react-redux';
import { deleteExpense, selectExpense, editExpensedata, editExpense } from '../../features/expense/ExpenseSlice';



const Home = () => {
    const expenseShowData = useSelector(selectExpense)
    const expenseEdit = useSelector(editExpensedata)

    const deleteDispatch = useDispatch()
    const editDispatch = useDispatch()





    console.log(expenseShowData);
    console.log(expenseEdit);

    



    return (
        <div className="Home-container">
            <div className="upper-container">
                <div className="search-container">
                    <input type="text" className="search-input"/>
                    <button className="search-button">Search</button>
                </div>
                <div className="total-container">
                    <p className="total">Total: <span className="total-amount">500.0</span></p>
                    <p className="threshold">Threshold: <span className="threshold-amount">1000.0</span></p>
                </div>
            </div>
            <div className="lower-container">
                {/* {
                    expenseShowData.map((item) => {
                        return(
                            <HomeItem 
                                title={item.title} 
                                desc={item.desc}
                                amount={item.amount}
                                date={item.date}
                                id={item.id}
                            />
                        )
                    })
                } */}
                {
                    expenseShowData.map((item) => {
                        return(
                            <div className="homeitem-container">
                                <div className="left-container">
                                    <div className="expense-heading">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="expense-description">
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="epense-date">
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                                <div className="right-container">
                                    <div className="expense-amount">
                                        <p>$ {item.amount} </p>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={(e) => editDispatch(editExpense(item.id))}>Edit</button>
                                        <button onClick={(e) => deleteDispatch(deleteExpense(item.id))} >Delete</button>
                                    </div>
                                    
                                </div>
                            
                            </div>
                            
                        )
                    })
                }
                
            </div>
                    
        </div>
    )
}

export default Home
