import { IExpense } from '@/type/expense'

export enum ExpenseAction {
  add,
  delete,
  update,
}

// payload

export interface IAddExpensePayload {
  expense: Omit<IExpense, 'id'>
}

export interface IDeleteExpensePayload {
  id: string
}

export interface IUpdateExpensePayload {
  id: string
  expense: Omit<IExpense, 'id'>
}

interface IAddExpense {
  type: ExpenseAction.add
  payload: IAddExpensePayload
}

// action

interface IDeleteExpense {
  type: ExpenseAction.delete
  payload: IDeleteExpensePayload
}

interface IUpdateExpense {
  type: ExpenseAction.update
  payload: IUpdateExpensePayload
}

// context

export interface IExpenseContext {
  expenses: IExpense[]
  addExpense: (payload: IAddExpensePayload) => void
  deleteExpense: (payload: IDeleteExpensePayload) => void
  updateExpense: (payload: IUpdateExpensePayload) => void
}

export type TExpenseAction = IAddExpense | IDeleteExpense | IUpdateExpense

export type TExpenseReducer = (
  state: IExpenseContext,
  action: TExpenseAction
) => IExpenseContext
