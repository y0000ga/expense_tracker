import { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import styles from '@/components/layout/LayoutContainer/index.style'

interface IProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

const LayoutContainer = ({ children, style }: IProps) => (
  <View style={[styles.container, style]}>{children}</View>
)

export default LayoutContainer
