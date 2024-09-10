import { INativeStackParamList, StackScreenType } from "@/type/navigation"
import { RouteProp, NavigationProp } from "@react-navigation/native"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"

export type TScreenOptions = (props: {
  route: RouteProp<INativeStackParamList, string>
  navigation: NavigationProp<INativeStackParamList>
}) => NativeStackNavigationOptions

export type TOptions = Record<StackScreenType, NativeStackNavigationOptions>