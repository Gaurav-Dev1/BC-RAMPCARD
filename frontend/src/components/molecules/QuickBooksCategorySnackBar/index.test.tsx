import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import QuickBooksCategorySnackBar from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'

describe('QuickBooksCategorySnackBar unit test', () => {
  it('should render the component', () => {
    render(
        <ThemeProvider theme={theme}>
            <QuickBooksCategorySnackBar
            open={true}
            vertical={'top'}
            horizontal={'left'}
            />
      </ThemeProvider>
    )
    expect(
      screen.getByTestId('quickbooks-category-snackbar')
    ).toBeInTheDocument()
  })

  it('should render the component when it is mounted with open prop as true', () => {
    render(
        <ThemeProvider theme={theme}>
            <QuickBooksCategorySnackBar
            open={true}
            vertical={'top'}
            horizontal={'left'}
            />
      </ThemeProvider>
    )
    expect(
      screen.getByTestId('snackbar')
    ).toBeInTheDocument()
  })

  it('should not render the component when it is unmounted with open prop as false', () => {
    render(
        <ThemeProvider theme={theme}>
            <QuickBooksCategorySnackBar
            open={false}
            vertical={'top'}
            horizontal={'left'}
            />
      </ThemeProvider>
    )
    expect(
      screen.queryByTestId('snackbar')
    ).not.toBeInTheDocument()
  })
})
