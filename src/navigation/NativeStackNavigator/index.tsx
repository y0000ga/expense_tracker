import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ManageExpense from '@/screens/ManageExpense'
import BottomTabNavigator from '@/navigation/BottomTabNavigator'
import { INativeStackParamList, StackScreenType } from '@/type/navigation'
import {
  Options,
  ScreenOptions,
} from '@/navigation/NativeStackNavigator/option'

const { Navigator, Screen } =
  createNativeStackNavigator<INativeStackParamList>()

const StackNavigator = () => (
  <Navigator
    initialRouteName={StackScreenType.ExpenseOverview}
    screenOptions={ScreenOptions}
  >
    <Screen
      name={StackScreenType.ExpenseOverview}
      component={BottomTabNavigator}
      options={Options[StackScreenType.ExpenseOverview]}
    />
    <Screen
      name={StackScreenType.ManageExpense}
      component={ManageExpense}
      options={Options[StackScreenType.ManageExpense]}
    />
  </Navigator>
)

export default StackNavigator
