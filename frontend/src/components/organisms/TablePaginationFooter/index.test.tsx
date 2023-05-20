import { render, screen } from '@testing-library/react'
import TablePaginationFooter from '.'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'

describe('TablePaginationFooter Unit Test', () => {
  it('check render of TablePaginationFooter', () => {
    
    render(<ThemeProvider theme={theme}><TablePaginationFooter  /></ThemeProvider>)
    expect(screen.getByTestId('pagination-footer')).toBeInTheDocument()
  })

  it('should have previous and next button', () => {
    render(<ThemeProvider theme={theme}><TablePaginationFooter  /></ThemeProvider>)
    const previousAndNextButtons = screen.getAllByRole('button')
    expect(previousAndNextButtons.length).toEqual(2)
  })
})
