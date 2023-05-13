import './App.css'
import theme from './Theme/theme'
import { ThemeProvider } from '@mui/material'
import IconButtonComponent from './components/atoms/IconButton'
import ClearIcon from '../public/assets/icons/clearIcon.svg'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButtonComponent src={ClearIcon} width='14px'/>
      </div>
    </ThemeProvider>
  )
}

export default App
