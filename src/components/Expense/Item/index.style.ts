import Color from '@/constants/color'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.primary[500],
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    // android
    elevation: 3,
    // ios
    shadowColor: Color.gray[500],
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  textContainer: {
    gap: 4,
  },
  textBase: {
    color: Color.primary[50],
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  amount: {
    color: Color.primary[500],
    fontWeight: 'bold',
  },
})

export default styles
