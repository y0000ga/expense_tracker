import { IExpense } from '@/type/expense'
import { Pressable, Text, View } from 'react-native'
import styles from '@/components/Expense/Item/index.style'
import { getFormattedDate } from '@/utils/date'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { INativeStackParamList, StackScreenType } from '@/type/navigation'

const ExpenseItem = ({ description, amount, date, id }: IExpense) => {
  const { navigate } = useNavigation<NavigationProp<INativeStackParamList>>()

  const handleExpensePress = () => {
    navigate(StackScreenType.ManageExpense, { expenseId: id })
  }

  return (
    <Pressable
      onPress={handleExpensePress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.expenseItem}>
        <View style={styles.textContainer}>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem
