import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Typography from '.'
import {
  TYPOGRAPHY_NEGATIVE_TEST_TEXT,
  TYPOGRAPHY_POSITIVE_TEST_TEXT,
} from '../../../constants/constant'

describe('Typography component unit test', () => {
  it('positive scenario for typography text', () => {
    render(
      <Typography variant="h1">{TYPOGRAPHY_POSITIVE_TEST_TEXT}</Typography>
    )
    expect(screen.getByText(TYPOGRAPHY_POSITIVE_TEST_TEXT)).toBeInTheDocument()
  })

  it('negative scenario for typography text', () => {
    render(
      <Typography variant="h1">{TYPOGRAPHY_POSITIVE_TEST_TEXT}</Typography>
    )
    expect(
      screen.queryByText(TYPOGRAPHY_NEGATIVE_TEST_TEXT)
    ).not.toBeInTheDocument()
  })
})
