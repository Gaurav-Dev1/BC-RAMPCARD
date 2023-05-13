import type { Meta, StoryObj } from '@storybook/react'
import Typography from '.'
import theme from '../../../Theme/theme'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
}

export default meta
type Story = StoryObj<typeof Typography>

export const h1: Story = {
  args: {
    variant: 'h1',
    color: theme.palette.highEmphasis.main,
    children: 'Typography',
  },
}
