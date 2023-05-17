import type { Meta, StoryObj } from '@storybook/react'
import MerchantRuleModal from '.'

const meta: Meta<typeof MerchantRuleModal> = {
  title: 'Molecules/MerchantRuleModal',
  component: MerchantRuleModal,
}

export default meta
type Story = StoryObj<typeof MerchantRuleModal>

export const MerchantRuleModalComponent: Story = {
  args: {
    modalOpenState: true
  },
}
