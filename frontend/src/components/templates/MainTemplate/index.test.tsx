import { screen } from '@testing-library/react'
import MainTemplate from '.'

import '@testing-library/jest-dom'
import { renderComponentWithTheme } from '../../../utils/utils'

describe('MainTemplate unit test', () => {
  it('renders maintemplate correctly', () => {
    renderComponentWithTheme(<MainTemplate />)
    expect(screen.getByTestId('main-template')).toBeInTheDocument()
  })
})
