import { fireEvent, render, screen } from '@testing-library/react'
import AccountingPageContent from '.'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'

describe('AccountingPageContent Unit Test', () => {
  it('check render of AccountingPageContent', () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountingPageContent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('accounting-page-content')).toBeInTheDocument()
  })
  it('check render of AccountingPageContent', () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountingPageContent />
      </ThemeProvider>
    )
    expect(screen.getByTestId('accounting-page-content')).toBeInTheDocument()
  })

  it('handles checkbox click event in account table', () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountingPageContent />
      </ThemeProvider>
    )

    const checkboxes = screen.getAllByRole('checkbox', {
      name: 'controlled',
    }) as HTMLInputElement[]

    expect(checkboxes.length).toBeGreaterThan(0)

    const checkbox = checkboxes[0]

    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })
})
