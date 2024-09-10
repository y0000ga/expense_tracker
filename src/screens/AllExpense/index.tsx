import ExpenseOutput from '@/components/Expense/Output'
import LayoutContainer from '@/components/layout/LayoutContainer'
import LayoutMessage from '@/components/layout/LayoutMessage'
import useExpenseCtx from '@/store/expense'
import { Text } from 'react-native'

const AllExpense = () => {
  const { expenses } = useExpenseCtx()

  return (
    <LayoutContainer>
      {expenses.length === 0 ? (
        <LayoutMessage message='No Expense Found' />
      ) : (
        <ExpenseOutput expensePeriod='Total' expenses={expenses} />
      )}
    </LayoutContainer>
  )
}

export default AllExpense
