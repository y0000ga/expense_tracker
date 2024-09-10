import { PropsWithChildren, useContext, useMemo, useReducer } from 'react'
import expenseReducer from './reducer'
import ExpenseContext, { defaultValue } from './context'
import {
  ExpenseAction,
  IAddExpensePayload,
  IDeleteExpensePayload,
  IExpenseContext,
  IUpdateExpensePayload,
} from './index.type'

export const ExpenseContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(expenseReducer, defaultValue)

  const isExpenseExisted = (id: string) => {
    return state.expenses.some((expense) => expense.id === id)
  }

  const addExpense = (payload: IAddExpensePayload) => {
    dispatch({ type: ExpenseAction.add, payload })
  }

  const deleteExpense = (payload: IDeleteExpensePayload) => {
    if (!isExpenseExisted(payload.id)) {
      return
    }
    dispatch({ type: ExpenseAction.delete, payload })
  }

  const updateExpense = (payload: IUpdateExpensePayload) => {
    if (!isExpenseExisted(payload.id)) {
      return
    }
    dispatch({ type: ExpenseAction.update, payload })
  }

  const value: IExpenseContext = useMemo(
    () => ({
      expenses: state.expenses,
      addExpense,
      deleteExpense,
      updateExpense,
    }),
    [state.expenses, addExpense, deleteExpense, updateExpense]
  )

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  )
}

const useExpenseCtx = () => {
  return useContext(ExpenseContext)
}

export default useExpenseCtx
