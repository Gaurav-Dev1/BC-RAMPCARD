import { render, screen } from '@testing-library/react'
import Header from '.'
import { ICON_DATA_TESTID, SETUP_GUIDE } from '../../../constants/constant'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'
import '@testing-library/jest-dom'

describe('Header unit test', () => {
  it('should render without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    const headerContainer = screen.getByTestId('header')
    expect(headerContainer).toBeInTheDocument()
  })

  //   it('should have the correct styles applied', () => {
  //     const { container } = render(<Header />);
  //     const headerContainer = container.firstChild;

  //     expect(headerContainer).toHaveStyle(`
  //       display: flex;
  //       height: 44px;
  //       background: #yourExpectedBackground;
  //       padding-right: 80px;
  //       padding-left: 40px;
  //       align-items: center;
  //       justify-content: space-between;
  //     `);
  //   });

  it('should render the ButtonIcon component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    const buttonIcon = screen.getByText(SETUP_GUIDE)
    expect(buttonIcon).toBeInTheDocument()
  })

  it('should render the Icon component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    const svgElements = screen.getAllByTestId(ICON_DATA_TESTID)
    expect(svgElements.length > 0).toBeTruthy()
  })
})
