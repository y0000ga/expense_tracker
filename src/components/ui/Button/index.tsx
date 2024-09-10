import { ButtonMode, TPressedStyle } from '@/type/ui'
import { PropsWithChildren, useMemo } from 'react'
import { Pressable, View, Text, StyleProp, ViewStyle } from 'react-native'
import styles from '@/components/ui/Button/index.style'

interface IProps extends PropsWithChildren {
  onPress: () => void
  mode?: ButtonMode
  style?: StyleProp<ViewStyle>
}

const pressedStyle: TPressedStyle = ({ pressed }) =>
  pressed ? styles.pressed : null

const Button = ({ children, onPress, mode, style }: IProps) => {
  const buttonStyle = useMemo(
    () => [styles.button, mode === ButtonMode.flat && styles.flat],
    [mode]
  )

  const textStyle = useMemo(
    () => [styles.buttonText, mode === ButtonMode.flat && styles.flatText],
    [mode]
  )

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={pressedStyle}
      >
        <View style={buttonStyle}>
          <Text style={textStyle}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button
