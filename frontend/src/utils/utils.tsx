import { ThemeProvider } from '@mui/material'
import{render} from '@testing-library/react'
import theme from '../Theme/theme'

export const renderComponentWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}