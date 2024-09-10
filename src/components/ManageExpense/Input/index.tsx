import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import styles from './index.style'
import { useMemo } from 'react'

interface IProps {
  label: string
  textInputConfig?: TextInputProps
  style?: StyleProp<ViewStyle>
  error?: { message: string }
}

const Input = ({ label, textInputConfig, style, error }: IProps) => {
  const inputStyle = useMemo(
    () => [
      styles.input,
      error && styles.error,
      textInputConfig?.style,
      textInputConfig?.multiline && styles.inputMultiline,
    ],
    [textInputConfig?.style, textInputConfig?.multiline, error]
  )

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, error && styles.errorLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
      {error && <Text style={styles.errorMessage}>{error.message}</Text>}
    </View>
  )
}

export default Input
