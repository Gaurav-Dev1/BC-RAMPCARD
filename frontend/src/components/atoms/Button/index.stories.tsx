import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'
import theme from '../../../Theme/theme'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const PrimaryCreateButton: Story = {
  args: {
    label: 'Create rule',
    color: 'primary500',
    variant: 'contained',
    labelColor: theme.palette.structuralWhite.main,
    padding: '3px 8px 5px 8px',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)',
  },
}

export const SecondaryCancelButton: Story = {
  args: {
    label: 'Cancel',
    color: 'structuralWhite',
    variant: 'outlined',
    labelColor: theme.palette.mediumEmphasis.main,
    padding: '3px 8px 5px',
    boxShadow:
      '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)',
    border: `1px solid rgba(60, 66, 87, 0.12)`,
    borderRadius: '4px',
  },
}
