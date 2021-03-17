import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    expenseList : [],
    editList:[]


}

const ExpenseSlice = createSlice({
    name: 'Expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenseList.push(action.payload)
        },
        deleteExpense: (state, action) => {
            // state.expenseList.map((item) => {
            //     if(action.payload === item.id){
            //         const filter = state.expenseList.filter(del_item => del_item.id !== action.payload)
            //         console.log(filter);
            //     }
            
            // })
            const del = state.expenseList.filter(item => item.id !== action.payload)
            console.log(del);
        },
        editExpense: (state, action) => {
            state.editList.push(state.expenseList.find(item => item.id === action.payload))
            console.log("hari");
        }
    
    }
});

export const { addExpense, deleteExpense, editExpense } = ExpenseSlice.actions

export const selectExpense = state => state.Expenses.expenseList
export const editExpensedata = state => state.Expenses.editList

export default ExpenseSlice.reducer