import { fireEvent, screen } from '@testing-library/react'
import NavBar from '.'
import { NavBarButtonLabels } from '../../../constants/constant'
import { renderComponentWithTheme } from '../../../utils/utils'
import '@testing-library/jest-dom'

describe('NavBar unit test', () => {
  it('renders correctly', () => {
    renderComponentWithTheme(<NavBar />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders navigation buttons correctly', () => {
    renderComponentWithTheme(<NavBar />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(9)
    expect(screen.getByText(NavBarButtonLabels[0])).toBeInTheDocument()
    expect(screen.getByText(NavBarButtonLabels[7])).toBeInTheDocument()
  })

  it('toggles navigation state when Insights button is clicked', () => {
    renderComponentWithTheme(<NavBar />)

    const insightsButton = screen.getByText('Insights')
    fireEvent.click(insightsButton)
    const activeInsightsButton = screen.getByTestId('inactive-insights')
    expect(activeInsightsButton).toBeInTheDocument()
  })

  it('toggles navigation state when Accounting button is clicked', () => {
    renderComponentWithTheme(<NavBar />)

    const accountingButton = screen.getByText('Accounting')
    fireEvent.click(accountingButton)

    const activeAccountingButton = screen.getByTestId('active-accounting')
    expect(activeAccountingButton).toBeInTheDocument()

    fireEvent.click(accountingButton)
  })
})
