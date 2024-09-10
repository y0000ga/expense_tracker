import { ExpenseAction, TExpenseReducer } from './index.type'

const expenseReducer: TExpenseReducer = (state, { type, payload }) => {
  switch (type) {
    case ExpenseAction.add: {
      const id = new Date().toString() + Math.random()
      const expenses = [...state.expenses, { ...payload.expense, id }]
      return {
        ...state,
        expenses,
      }
    }
    case ExpenseAction.delete: {
      const expenses = state.expenses.filter(
        (expense) => expense.id !== payload.id
      )
      return {
        ...state,
        expenses,
      }
    }
    case ExpenseAction.update: {
      const expenses = state.expenses.map((expense) =>
        expense.id === payload.id
          ? { ...payload.expense, id: expense.id }
          : expense
      )
      return {
        ...state,
        expenses,
      }
    }
    default:
      return state
  }
}

export default expenseReducer
