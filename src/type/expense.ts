export interface IExpense {
  id: string
  description: string
  amount: number
  date: Date
}

export enum ManageStatus {
  new,
  editing,
}

export interface IForm {
  amount?: string
  date?: string
  description?: string
}
