import { IExpense, IForm } from '@/type/expense'
import { useCallback, useMemo, useState } from 'react'

const newForm = {
  amount: undefined,
  date: undefined,
  description: undefined,
}

const isAmountValid = (amount?: string) => !!amount && !isNaN(+Number(amount))
const isDateValid = (date?: string) =>
  !!date && new Date(date).toString() !== 'Invalid Date'
const isDescriptionValid = (description?: string) => !!description

const useExpenseForm = ({ initialForm }: { initialForm?: IForm }) => {
  const [expense, setExpense] = useState(initialForm || newForm)

  const updateExpense = (inputType: keyof IExpense, value: string) => {
    setExpense((prev) => ({
      ...prev,
      [inputType]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [inputType]: undefined,
    }))
  }

  const [errors, setErrors] = useState<{
    [key in keyof Omit<IExpense, 'id'>]?: { message: string }
  }>({
    amount: undefined,
    date: undefined,
    description: undefined,
  })

  const completedExpense = useMemo(() => {
    const isValid =
      isAmountValid(expense.amount) &&
      isDateValid(expense.date) &&
      isDescriptionValid(expense.description)
    const isRequired = !!(expense.date && expense.description && expense.amount)
    if (isValid && isRequired) {
      return {
        amount: Number(expense.amount as string),
        date: new Date(expense.date as string),
        description: expense.description as string,
      }
    }
  }, [expense])

  const validate = useCallback(() => {
    setErrors({
      ...(!isAmountValid(expense.amount) && {
        amount: {
          message: 'Invalid Amount',
        },
      }),
      ...(!isDateValid(expense.date) && {
        date: {
          message: 'Invalid Date',
        },
      }),
      ...(!isDescriptionValid(expense.description) && {
        description: {
          message: 'Invalid Description',
        },
      }),
    })
  }, [expense])

  return {
    expense,
    updateExpense,
    completedExpense,
    errors,
    validate,
  }
}

export default useExpenseForm
