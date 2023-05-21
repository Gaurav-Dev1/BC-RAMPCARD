import './App.css'
import theme from './Theme/theme'
import { ThemeProvider } from '@mui/material'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  )
}
export default App
