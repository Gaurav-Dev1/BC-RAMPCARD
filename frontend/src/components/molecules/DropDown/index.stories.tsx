import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DropDown from '.'
import {
  QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER,
  QUICKBOOKS_CATEGORY_OPTION,
} from '../../../constants/constant'

const meta: Meta<typeof DropDown> = {
  title: 'Molecules/DropDown',
  component: DropDown,
}

export default meta
type Story = StoryObj<typeof DropDown>

export const DropDownComponent: Story = {
  args: {
    value: '',
    items: QUICKBOOKS_CATEGORY_OPTION,
    placeholder: QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER,
    onChange: action('onChange'),
    height: '32px',
    width: '144px',
  },
}
