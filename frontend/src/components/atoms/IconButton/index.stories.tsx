import type { Meta, StoryObj } from '@storybook/react'
import IconButton from '.'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import DeleteIcon from '../../../../public/assets/icons/deleteIcon.svg'

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const ClearIconButton: Story = {
  args: {
    src: ClearIcon,
    width: '14px',
  },
}

export const DeleteIconButton: Story = {
  args: {
    src: DeleteIcon,
    width: '14px',
  },
}
