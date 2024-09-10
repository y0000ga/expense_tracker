import Color from '@/constants/color'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Color.primary[800],
    gap: 20,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: Color.primary[200],
    alignItems: 'center',
  },
})

export default styles
