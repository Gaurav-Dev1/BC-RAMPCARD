import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LabelAndValueCard from '.'
import theme from '../../../Theme/theme'
import {
  LABEL_VALUE_CARD_TEST_LABEL,
  LABEL_VALUE_CARD_TEST_VALUE,
} from '../../../constants/constant'

describe('LabelAndValueCard component unit test', () => {
  it('LabelAndValueCard component render test with label', () => {
    render(
      <LabelAndValueCard
        label={LABEL_VALUE_CARD_TEST_LABEL}
        value={LABEL_VALUE_CARD_TEST_VALUE}
        labelColor={theme.palette.mediumEmphasis.main}
        valueColor={theme.palette.accentGreen100.main}
        labelVariant={'caption2'}
        valueVariant={'subtitle2'}
      />
    )
    const labelvalueTextElement = screen.getByText(LABEL_VALUE_CARD_TEST_LABEL)
    expect(labelvalueTextElement).toBeInTheDocument()
  })

  it('LabelAndValueCard component render test with value', () => {
    render(
      <LabelAndValueCard
        label={LABEL_VALUE_CARD_TEST_LABEL}
        value={LABEL_VALUE_CARD_TEST_VALUE}
        labelColor={theme.palette.mediumEmphasis.main}
        valueColor={theme.palette.accentGreen100.main}
        labelVariant={'caption2'}
        valueVariant={'subtitle2'}
      />
    )
    const valueTextElement = screen.getByText(LABEL_VALUE_CARD_TEST_VALUE)
    expect(valueTextElement).toBeInTheDocument()
  })
})
