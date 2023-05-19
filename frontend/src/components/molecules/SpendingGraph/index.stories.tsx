import type { Meta, StoryObj } from '@storybook/react'
import SpendingGraph from '.'

const meta: Meta<typeof SpendingGraph> = {
  title: 'Molecules/SpendingGraph',
  component: SpendingGraph,
}

export default meta
type Story = StoryObj<typeof SpendingGraph>

export const SpendingGraphComponent: Story = {
  args: {
    
  },
}
