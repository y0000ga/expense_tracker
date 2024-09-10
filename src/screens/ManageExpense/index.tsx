import LayoutContainer from '@/components/layout/LayoutContainer'
import IconButton from '@/components/ui/IconButton'
import Color from '@/constants/color'
import { IExpense, ManageStatus } from '@/type/expense'
import { INativeStackParamList, StackScreenType } from '@/type/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect, useMemo } from 'react'
import styles from '@/screens/ManageExpense/index.style'
import { View } from 'react-native'
import useExpenseCtx from '@/store/expense'
import ExpenseForm from '@/components/ManageExpense/Form'
import { getFormattedDate } from '@/utils/date'

interface IProps
  extends NativeStackScreenProps<
    INativeStackParamList,
    StackScreenType.ManageExpense
  > {}

const ManageExpense = ({
  route: { params },
  navigation: { setOptions, goBack },
}: IProps) => {
  const { deleteExpense, addExpense, updateExpense, expenses } = useExpenseCtx()

  const status = useMemo(() => {
    if (!!params?.expenseId) {
      return ManageStatus.editing
    }
    return ManageStatus.new
  }, [params?.expenseId])

  const handleDelete = () => {
    if (params?.expenseId) {
      deleteExpense({ id: params?.expenseId })
    }
    goBack()
  }

  const onCancel = () => {
    goBack()
  }

  const form = useMemo(() => {
    if (!params?.expenseId) {
      return
    }
    const existedExpense = expenses.find(
      (expense) => expense.id === params.expenseId
    )

    if (!existedExpense) {
      return
    }

    return {
      amount: existedExpense.amount.toString(),
      date: getFormattedDate(existedExpense.date),
      description: existedExpense.description,
    }
  }, [status, expenses])

  useLayoutEffect(() => {
    if (status === ManageStatus.editing) {
      setOptions({ title: 'Edit Expense' })
    } else {
      setOptions({ title: 'Add Expense' })
    }
  }, [status, setOptions])

  const onSubmit = (expense: Omit<IExpense, 'id'>) => {
    if (params?.expenseId) {
      updateExpense({
        id: params?.expenseId,
        expense,
      })
    } else {
      addExpense({ expense })
    }
    goBack()
  }

  return (
    <LayoutContainer style={styles.container}>
      <ExpenseForm
        initialForm={form}
        status={status}
        onCancel={onCancel}
        onSubmit={onSubmit}
        submitButtonLabel={status === ManageStatus.editing ? 'Update' : 'Add'}
      />
      {status === ManageStatus.editing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            size={36}
            color={Color.error[500]}
            onPress={handleDelete}
          />
        </View>
      )}
    </LayoutContainer>
  )
}

export default ManageExpense
