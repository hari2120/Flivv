import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../features/expense/ExpenseSlice';

export default configureStore({
  reducer: {
    Expenses: expenseReducer,
  },
});
