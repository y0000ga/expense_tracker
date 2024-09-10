import Color from '@/constants/color'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Color.primary[50],
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: Color.primary[400],
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.primary[500],
  },
})

export default styles
