import type { Meta, StoryObj } from '@storybook/react'
import LabelAndValueCard from '.'
import {
  AUGUST_SPEND_AMOUNT,
  AUGUST_SPEND_TEXT,
  LABEL_VALUE_CARD_TEST_LABEL,
  LABEL_VALUE_CARD_TEST_VALUE,
} from '../../../constants/constant'
import theme from '../../../Theme/theme'

const meta: Meta<typeof LabelAndValueCard> = {
  title: 'Molecules/LabelAndValueCard',
  component: LabelAndValueCard,
}

export default meta
type Story = StoryObj<typeof LabelAndValueCard>

export const LabelAndValueCardComponent: Story = {
  args: {
    value: LABEL_VALUE_CARD_TEST_LABEL,
    label: LABEL_VALUE_CARD_TEST_VALUE,
    labelColor: theme.palette.mediumEmphasis.main,
    valueColor: theme.palette.accentGreen100.main,
    labelVariant: 'caption2',
    valueVariant: 'subtitle2',
  },
}

export const MonthlySpendCard: Story = {
  args: {
    value: AUGUST_SPEND_AMOUNT,
    label: AUGUST_SPEND_TEXT,
    labelColor: theme.palette.lowEmphasis.main,
    valueColor: theme.palette.primary500.main,
    labelVariant: 'body2',
    valueVariant: 'subtitle3',
  },
}
