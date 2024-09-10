import Color from '@/constants/color'
import { Ionicons } from '@expo/vector-icons'
import IconButton from '@/components/ui/IconButton'
import { BottomTabScreenType, StackScreenType } from '@/type/navigation'
import { IOptions, IScreenOptions } from '@/navigation/BottomTabNavigator/index.type'

export const ScreenOptions: IScreenOptions = ({ navigation: { navigate } }) => {
  const handleNewExpensePress = () => {
    navigate(StackScreenType.ManageExpense)
  }
  return {
    headerStyle: {
      backgroundColor: Color.primary[500],
    },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: Color.primary[500],
    },
    tabBarActiveTintColor: Color.accent[500],
    headerRight: ({ tintColor, pressColor, pressOpacity }) => (
      <IconButton
        icon='add'
        size={24}
        color={tintColor}
        pressedColor={pressColor}
        pressedOpacity={pressOpacity}
        onPress={handleNewExpensePress}
      />
    ),
  }
}

export const Options: IOptions = {
  [BottomTabScreenType.RecentExpense]: {
    title: 'Recent Expenses',
    tabBarLabel: 'Recent',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name='hourglass' size={size} color={color} />
    ),
  },
  [BottomTabScreenType.AllExpense]: {
    title: 'All Expenses',
    tabBarLabel: 'All',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name='calendar' size={size} color={color} />
    ),
  },
}
