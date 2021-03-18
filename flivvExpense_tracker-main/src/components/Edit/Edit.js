import React, { useState } from 'react'
import "./edit.scss"
import {useDispatch, useSelector} from 'react-redux'

import { editExpense  } from '../../features/expense/ExpenseSlice'



const initialValues = {
    title: "",
    desc: "",
    amount: 0,
    date: ""
}


const Edit = () => {
    const [values, setValues] = useState(initialValues)
    

    const handleChange = (e) => {
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

    }
    const Submit =(e) => {
        e.preventDefault()
        console.log(values);
        
        
    }

    return (
        <div className="edit-container">
            <div className="edit-heading">
                <h3>Edit your Record Here</h3>
            </div>
            <div className="edit-form-container">
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

export default Edit
