import { Alert, Text, View } from 'react-native'
import Input from '../Input'
import { IExpense, IForm, ManageStatus } from '@/type/expense'
import { useMemo } from 'react'
import styles from './index.style'
import Button from '@/components/ui/Button'
import { ButtonMode } from '@/type/ui'
import useExpenseForm from '@/hooks/useExpenseForm'

export type THandleInputChange = (
  inputType: keyof IExpense,
  value: string
) => void

interface IProps {
  initialForm?: IForm
  status: ManageStatus
  onCancel: () => void
  onSubmit: (form: Omit<IExpense, 'id'>) => void
  submitButtonLabel: string
}

const ExpenseForm = ({
  initialForm,
  submitButtonLabel,
  onCancel,
  onSubmit,
}: IProps) => {
  const { expense, updateExpense, completedExpense, validate, errors } =
    useExpenseForm({
      initialForm,
    })

  const amountInputConfig = useMemo(
    () => ({
      keyboardType: 'decimal-pad' as const,
      value: expense.amount,
      // value 會自動成為第二個 parameter
      onChangeText: updateExpense.bind(this, 'amount'),
    }),
    [expense.amount]
  )

  const dateInputConfig = useMemo(
    () => ({
      placeholder: 'YYYY-MM-DD',
      maxLength: 10,
      value: expense.date,
      onChangeText: updateExpense.bind(this, 'date'),
    }),
    [expense.date]
  )

  const descriptionInputConfig = useMemo(
    () => ({
      value: expense.description,
      onChangeText: updateExpense.bind(this, 'description'),
      multiline: true,
      autoCorrect: false,
      autoCapitalize: 'none' as const,
    }),
    [expense.description]
  )

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
          <Input
            label='Amount'
            style={styles.rowInput}
            textInputConfig={amountInputConfig}
            error={errors.amount}
          />
          <Input
            label='Date'
            style={styles.rowInput}
            textInputConfig={dateInputConfig}
            error={errors.date}
          />
        </View>
        <Input
          label='Description'
          textInputConfig={descriptionInputConfig}
          error={errors.description}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode={ButtonMode.flat}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={() => {
            if (!completedExpense) {
              validate()
            } else {
              onSubmit(completedExpense)
            }
          }}
        >
          {submitButtonLabel}
        </Button>
      </View>
    </>
  )
}

export default ExpenseForm
