import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RampCards from '.'
import theme from '../../../Theme/theme'
import { ThemeProvider } from '@mui/material'
import { MISSING_ITEMS } from '../../../constants/constant'

describe('RampCards component unit test', () => {
  it('RampCards component render test with labels', () => {
    render(
      <ThemeProvider theme={theme}>
        <RampCards width={''} merchantRulesCount={0} />
      </ThemeProvider>
    )
    const missingItemsElement = screen.getByText(MISSING_ITEMS)
    expect(missingItemsElement).toBeInTheDocument()
  })
})
