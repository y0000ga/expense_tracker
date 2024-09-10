import ExpenseOutput from '@/components/Expense/Output'
import LayoutContainer from '@/components/layout/LayoutContainer'
import LayoutMessage from '@/components/layout/LayoutMessage'
import useExpenseCtx from '@/store/expense'
import { getDateMinusDays } from '@/utils/date'
import { useMemo } from 'react'

const RecentExpense = () => {
  const { expenses } = useExpenseCtx()

  const recentExpenses = useMemo(
    () => expenses.filter(({ date }) => date > getDateMinusDays(new Date(), 7)),
    [expenses]
  )

  return (
    <LayoutContainer>
      {expenses.length === 0 ? (
        <LayoutMessage message='No Expense Found' />
      ) : (
        <ExpenseOutput expensePeriod='Last 7 Days' expenses={recentExpenses} />
      )}
    </LayoutContainer>
  )
}

export default RecentExpense
