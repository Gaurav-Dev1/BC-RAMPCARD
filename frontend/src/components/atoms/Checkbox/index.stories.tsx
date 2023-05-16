import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'

const meta: Meta<typeof Image> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Image>

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}
