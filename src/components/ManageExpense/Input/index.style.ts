import Color from '@/constants/color'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: Color.primary[100],
  },
  input: {
    backgroundColor: Color.primary[100],
    padding: 8,
    borderRadius: 8,
    fontSize: 16,
    color: Color.primary[700],
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorMessage: {
    color: Color.error[500],
  },
  errorLabel: {
    color: Color.error[500],
  },
  error: {
    backgroundColor: Color.error[50],
  }
})

export default styles
