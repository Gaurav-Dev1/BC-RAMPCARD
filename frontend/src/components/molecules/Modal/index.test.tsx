import { render, screen } from '@testing-library/react'
import ModalComponent from '.'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('ModalComponent', () => {
  it('renders modal when open prop is true', () => {
    renderWithTheme(
      <ModalComponent
        open={true}
        onClose={jest.fn()}
        top="50%"
        left="50%"
        height="300px"
        width="400px"
      >
        <div>{<></>}</div>
      </ModalComponent>
    )

    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeInTheDocument()
  })

  it('does not render modal when open prop is false', () => {
    renderWithTheme(
      <ModalComponent
        open={false}
        onClose={jest.fn()}
        top="50%"
        left="50%"
        height="300px"
        width="400px"
      >
        <div>{<></>}</div>
      </ModalComponent>
    )

    const modalElement = screen.queryByTestId('modal')
    expect(modalElement).toBeNull
  })
})
