import { Ionicons } from '@expo/vector-icons'
import { Pressable, View } from 'react-native'
import styles from '@/components/ui/IconButton/index.style'
import { useCallback } from 'react'
import { TPressedStyle } from '@/type/ui'

interface IProps {
  icon: string
  size: number
  color?: string
  pressedColor?: string
  pressedOpacity?: number
  onPress: () => void
}

const IconButton = ({
  icon,
  size,
  color,
  onPress,
  pressedColor,
  pressedOpacity,
}: IProps) => {
  const pressedStyle: TPressedStyle = useCallback(
    ({ pressed }) =>
      pressed
        ? [
            {
              ...styles.pressed,
              opacity: pressedOpacity ? pressedOpacity : styles.pressed.opacity,
              color: pressedColor ? pressedColor : styles.pressed.color,
            },
          ]
        : null,
    [pressedColor, pressedOpacity, styles.pressed.color, styles.pressed.opacity]
  )
  return (
    <Pressable style={pressedStyle} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons
          // @ts-ignore
          name={icon}
          size={size}
          color={color || 'white'}
        />
      </View>
    </Pressable>
  )
}

export default IconButton
