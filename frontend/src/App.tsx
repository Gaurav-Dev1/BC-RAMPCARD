import './App.css'
import theme from './Theme/theme'
import { ThemeProvider } from '@mui/material'
import AccountingTable from './components/organisms/AccountinTable'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div><AccountingTable /></div>
    </ThemeProvider>
  )
}

export default App
