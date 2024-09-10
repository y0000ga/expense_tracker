import { ParamListBase } from '@react-navigation/native'

export enum BottomTabScreenType {
  AllExpense = 'AllExpense',
  RecentExpense = 'RecentExpense',
}

export interface IBottomTabParamList extends ParamListBase {
  [BottomTabScreenType.AllExpense]: {}
  [BottomTabScreenType.RecentExpense]: {}
}

export enum StackScreenType {
  ExpenseOverview = 'ExpenseOverview',
  ManageExpense = 'ManageExpense',
}

export interface INativeStackParamList extends ParamListBase {
  [StackScreenType.ExpenseOverview]: {}
  [StackScreenType.ManageExpense]: { expenseId?: string }
}
