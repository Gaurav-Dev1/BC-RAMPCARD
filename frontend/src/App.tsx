import './App.css'
import theme from './Theme/theme'
import { ThemeProvider } from '@mui/material'
import AccountingPageContent from './components/organisms/AccountingPageContent'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div><AccountingPageContent ></AccountingPageContent></div>
    </ThemeProvider>
  )
}
export default App