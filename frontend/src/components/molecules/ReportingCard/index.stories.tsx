import type { Meta, StoryObj } from '@storybook/react'
import ReportingCard from '.'
import { REPORTING_CARD_CONTENT, REPORTING_CARD_HEADING } from '../../../constants/constant'

const meta: Meta<typeof ReportingCard> = {
  title: 'Molecules/ReportingCard',
  component: ReportingCard,
}

export default meta
type Story = StoryObj<typeof ReportingCard>

export const ReportingCardComponent: Story = {
  args: {
    heading: REPORTING_CARD_HEADING,
    content: REPORTING_CARD_CONTENT
  },
}
