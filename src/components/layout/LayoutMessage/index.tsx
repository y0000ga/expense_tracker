import { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'
import styles from './index.style'

interface IProps extends PropsWithChildren {
  message?: string
}

const LayoutMessage = ({ children, message }: IProps) => {
  return (
    <View style={styles.container}>
      {message ? <Text style={styles.message}>{message}</Text> : children}
    </View>
  )
}

export default LayoutMessage
