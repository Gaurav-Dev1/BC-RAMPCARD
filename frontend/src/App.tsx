import './App.css'
import theme from './Theme/theme'
import { ThemeProvider } from '@mui/material'
import TextSelect from './components/molecules/TextSelect'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{marginTop: '20px'}}>
        <TextSelect />
      </div>
    </ThemeProvider>
  )
}

export default App
