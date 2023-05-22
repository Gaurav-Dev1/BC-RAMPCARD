import type { Meta, StoryObj } from '@storybook/react'
import QuickBooksCategorySnackBar from '.'

const meta: Meta<typeof QuickBooksCategorySnackBar> = {
  title: 'Molecules/QuickBooksCategorySnackBar',
  component: QuickBooksCategorySnackBar,
}

export default meta
type Story = StoryObj<typeof QuickBooksCategorySnackBar>

export const Component: Story = {
  args: {
    open: true,
  },
}
