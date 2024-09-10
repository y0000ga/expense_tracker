import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllExpense from '@/screens/AllExpense'
import RecentExpense from '@/screens/RecentExpense'
import { IBottomTabParamList, BottomTabScreenType } from '@/type/navigation'
import { Options, ScreenOptions } from '@/navigation/BottomTabNavigator/option'

const { Navigator, Screen } = createBottomTabNavigator<IBottomTabParamList>()

const BottomTabNavigator = () => (
  <Navigator
    initialRouteName={BottomTabScreenType.RecentExpense}
    screenOptions={ScreenOptions}
  >
    <Screen
      name={BottomTabScreenType.RecentExpense}
      component={RecentExpense}
      options={Options[BottomTabScreenType.RecentExpense]}
    />
    <Screen
      name={BottomTabScreenType.AllExpense}
      component={AllExpense}
      options={Options[BottomTabScreenType.AllExpense]}
    />
  </Navigator>
)

export default BottomTabNavigator
