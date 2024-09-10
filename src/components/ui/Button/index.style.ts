import Color from '@/constants/color'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Color.primary[500],
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: Color.primary[500],
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Color.primary[100],
    borderRadius: 4,
  },
})

export default styles
