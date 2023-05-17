import type { Meta, StoryObj } from '@storybook/react'
import Modal from '.'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const ModalComponent: Story = {
  args: {
    open: true,
    children: 'modal children',
    top: '50%',
    left: '50%',
    height: '100px',
    width: '200px',
  },
}
