import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import ButtonIcon from '.'
import theme from '../../../Theme/theme'
import '@testing-library/jest-dom'
import Icon from '../../atoms/Icon'
import FilterIcon from '../../../../public/assets/icons/filterIcon.svg'
import { ICON_DATA_TESTID } from '../../../constants/constant'

describe('ButtonIcon component unit test', () => {
  it('renders ButtonIcon component', () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          variant="text"
          label="Filter"
          color="primary500"
          startIcon={<Icon src={FilterIcon} />}
          labelColor={theme.palette.structuralWhite.main}
        />
      </ThemeProvider>
    )
    const buttonElement = screen.getByTestId('button-icon')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with SVG when startIcon  props is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          variant="text"
          label="Filter"
          color="primary500"
          startIcon={<Icon src={FilterIcon} />}
          labelColor={theme.palette.structuralWhite.main}
        />
      </ThemeProvider>
    )
    const svgElement = screen.getByTestId(ICON_DATA_TESTID)
    expect(svgElement).toBeInTheDocument()
  })

  it('should render with SVG when endIcon  props is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonIcon
          variant="text"
          label="Filter"
          color="primary500"
          endIcon={<Icon src={FilterIcon} />}
          labelColor={theme.palette.structuralWhite.main}
        />
      </ThemeProvider>
    )
    const svgElement = screen.getByTestId(ICON_DATA_TESTID)
    expect(svgElement).toBeInTheDocument()
  })
})
