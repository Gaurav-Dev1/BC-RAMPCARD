import { render, screen } from '@testing-library/react'
import AccountingPageContent from '.'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'

describe('AccountingPageContent Unit Test', () => {
  it('check render of AccountingPageContent', () => {
    
    render(<ThemeProvider theme={theme}><AccountingPageContent  /></ThemeProvider>)
    expect(screen.getByTestId('accounting-page-content')).toBeInTheDocument()
  })
  it('check render of AccountingPageContent', () => {
    
    render(<ThemeProvider theme={theme}><AccountingPageContent  /></ThemeProvider>)
    expect(screen.getByTestId('accounting-page-content')).toBeInTheDocument()
  })
})
