import type { Meta, StoryObj } from '@storybook/react'
import TextSelect from '.'
import { QUICKBOOKS_CATEGORY_OPTION } from '../../../constants/constant'

const meta: Meta<typeof TextSelect> = {
  title: 'Molecules/TextSelect',
  component: TextSelect,
}

export default meta
type Story = StoryObj<typeof TextSelect>

export const DropDown: Story = {
  args: {
    value: '',
    items: QUICKBOOKS_CATEGORY_OPTION
  },
}
