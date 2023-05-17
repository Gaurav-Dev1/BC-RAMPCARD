import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import ButtonComponent from '.'
import theme from '../../../Theme/theme'
import '@testing-library/jest-dom'

it('renders button', () => {
  render(
    <ThemeProvider theme={theme}>
      <ButtonComponent
        variant="contained"
        label="Create"
        color="primary500"
        labelColor={theme.palette.structuralWhite.main}
      />
    </ThemeProvider>
  )
  const buttonElement = screen.getByTestId('button')
  expect(buttonElement).toBeInTheDocument()
})
