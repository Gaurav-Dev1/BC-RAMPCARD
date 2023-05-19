import type { Meta, StoryObj } from '@storybook/react'
import RampCards from '.'
import { MERCHANT_RULES_MOCK_VALUE } from '../../../constants/constant'

const meta: Meta<typeof RampCards> = {
  title: 'Molecules/RampCards',
  component: RampCards,
}

export default meta
type Story = StoryObj<typeof RampCards>

export const RampCardsComponent: Story = {
  args: {
    merchantRulesCount: MERCHANT_RULES_MOCK_VALUE
  }
}
