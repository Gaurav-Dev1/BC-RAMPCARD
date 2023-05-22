import { screen } from '@testing-library/react'
import InsightsPage from '.'

import '@testing-library/jest-dom'
import { renderComponentWithTheme } from '../../../utils/utils'

describe('InsightsPage unit test', () => {
  it('render header', () => {
    renderComponentWithTheme(<InsightsPage />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('render navbar', () => {
    renderComponentWithTheme(<InsightsPage />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders InsightsPage correctly', () => {
    renderComponentWithTheme(<InsightsPage />)
    expect(screen.getByTestId('insights-page')).toBeInTheDocument()
  })
})
