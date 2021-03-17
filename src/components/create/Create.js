import React, { useState } from 'react'
import "./create.scss"


import {useDispatch} from 'react-redux'
import { addExpense } from '../../features/expense/ExpenseSlice'




const initialValues = {
    title: "",
    desc: "",
    amount: "",
    date: "",
    id: 0
}
const Create = () => {
    const [values, setValues] = useState(initialValues)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

    }
    const Submit =(e) => {
        e.preventDefault()
        dispatch(addExpense(values))
        const id = Math.floor(Math.random() * 10000)
        setValues({
            id:id
        })
    }

    return (
        <div className="Create-container">
            <div className="create-heading">
                <h2>Create your Record here</h2>
            </div>
            <div className="create-form">
                <form action="">
                    <div className="crete-title">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name='title' onChange={handleChange} className="title-input"/>
                    </div>
                    <div className="crete-desc">
                        <label htmlFor="desc">Description</label>
                        <input type="text" name='desc'  id="desc" onChange={handleChange}  className="desc-input"/>
                    </div>
                    <div className="crete-amount">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name='amount'  id="amount" onChange={handleChange}  className="amount-input"/>
                    </div>
                    <div className="crete-date">
                        <label htmlFor="date">Date</label>
                        <input type="date" name='date'  id="date" onChange={handleChange}  className="date-input"/>
                    </div>
                    <div className="buttons">
                        <button onClick={Submit}>Create</button>
                        <button>Cancel</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Create
