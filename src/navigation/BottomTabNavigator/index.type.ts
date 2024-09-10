import { BottomTabScreenType, IBottomTabParamList } from '@/type/navigation'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { RouteProp, NavigationProp } from '@react-navigation/native'

export type IScreenOptions = (props: {
  route: RouteProp<IBottomTabParamList, string>
  navigation: NavigationProp<IBottomTabParamList>
}) => BottomTabNavigationOptions

export type IOptions = Record<BottomTabScreenType, BottomTabNavigationOptions>