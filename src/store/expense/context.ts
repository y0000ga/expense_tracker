import { createContext } from 'react'
import { IExpenseContext } from '@/store/expense/index.type'
import { DUMMY_DATA } from '@/constants/dummyData'

export const defaultValue = {
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
}

const ExpenseContext = createContext<IExpenseContext>(defaultValue)

export default ExpenseContext
