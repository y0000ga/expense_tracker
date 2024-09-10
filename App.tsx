import AppNavigator from '@/navigation/AppNavigator'
import { ExpenseContextProvider } from '@/store/expense'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <ExpenseContextProvider>
        <AppNavigator />
      </ExpenseContextProvider>
    </>
  )
}

export default App
