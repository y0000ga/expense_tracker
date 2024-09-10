import { View } from 'react-native'
import ExpenseSummary from '@/components/Expense/Summary'
import ExpenseList from '@/components/Expense/List'
import { IExpense } from '@/type/expense'
import styles from '@/components/Expense/Output/index.style'

interface IProps {
  expenses: IExpense[]
  expensePeriod: string
}

const ExpenseOutput = ({ expenses, expensePeriod }: IProps) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      <ExpenseList expenses={expenses} />
    </View>
  )
}

export default ExpenseOutput
