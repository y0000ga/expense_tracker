import { IExpense } from '@/type/expense'
import { FlatList, ListRenderItem } from 'react-native'
import ExpenseItem from '@/components/Expense/Item'

interface IProps {
  expenses: IExpense[]
}

const ExpenseList = ({ expenses }: IProps) => {
  const renderExpenseItem: ListRenderItem<IExpense> = ({ item }) => {
    return <ExpenseItem {...item} />
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  )
}

export default ExpenseList
