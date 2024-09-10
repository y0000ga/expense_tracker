import { IExpense } from '@/type/expense'
import { useMemo } from 'react'
import { View, Text } from 'react-native'
import styles from '@/components/Expense/Summary/index.style'

interface IProps {
  periodName: string
  expenses: IExpense[]
}

const Summary = ({ periodName, expenses }: IProps) => {
  const total = useMemo(
    () => expenses.reduce((sum, { amount }) => sum + amount, 0),
    [expenses]
  )

  console.log(total)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.total}>${total.toFixed(2)}</Text>
    </View>
  )
}

export default Summary
