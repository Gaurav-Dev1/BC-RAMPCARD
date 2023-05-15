import './App.css'
import theme from './Theme/theme'
import { SelectChangeEvent, ThemeProvider } from '@mui/material'
import DropDown from './components/molecules/TextSelect'
import { QUICKBOOKS_CATEGORY_OPTION } from './constants/constant'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{marginTop: '20px'}}>
        <DropDown value={''} onChange={function (event: SelectChangeEvent<unknown>): void {
          throw new Error('Function not implemented.')
        } } items={QUICKBOOKS_CATEGORY_OPTION}  />
      </div>
    </ThemeProvider>
  )
}

export default App
