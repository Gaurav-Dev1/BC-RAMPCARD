import './App.css'
import theme from './Theme/theme'
import { Grid, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import InsightsPage from './components/pages/InsightsPage';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <BrowserRouter>
        <Routes>
          <Route path = '/' element={<InsightsPage />}/>
        </Routes>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  )
}
export default App
