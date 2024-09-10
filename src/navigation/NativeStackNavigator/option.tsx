import Color from '@/constants/color'
import { StackScreenType } from '@/type/navigation'
import {
  TOptions,
  TScreenOptions,
} from '@/navigation/NativeStackNavigator/index.type'

export const ScreenOptions: TScreenOptions = () => ({
  headerStyle: {
    backgroundColor: Color.primary[500],
  },
  headerTintColor: 'white',
})

export const Options: TOptions = {
  [StackScreenType.ExpenseOverview]: {
    headerShown: false,
  },
  [StackScreenType.ManageExpense]: {
    // 改變顯示的形式，僅限 iOS，e.g. 彈窗之類的
    presentation: 'modal',
  },
}
