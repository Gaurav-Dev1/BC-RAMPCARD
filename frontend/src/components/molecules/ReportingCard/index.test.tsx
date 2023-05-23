import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ReportingCard from '.'
import theme from '../../../Theme/theme'
import { ThemeProvider } from '@mui/material'
import {
  REPORTING_CARD_CONTENT,
  REPORTING_CARD_HEADING,
  REPORTING_CARD_POTENTIAL_SAVINGS_VALUE,
} from '../../../constants/constant'

describe('ReportingCard component unit test', () => {
  it('ReportingCard component render test', () => {
    render(
      <ThemeProvider theme={theme}>
        <ReportingCard
          heading={REPORTING_CARD_HEADING}
          content={REPORTING_CARD_CONTENT} savingsValue={REPORTING_CARD_POTENTIAL_SAVINGS_VALUE}        />
      </ThemeProvider>
    )
    const labelvalueTextElement = screen.getByTestId('reporting-card')
    expect(labelvalueTextElement).toBeInTheDocument()
  })
})
