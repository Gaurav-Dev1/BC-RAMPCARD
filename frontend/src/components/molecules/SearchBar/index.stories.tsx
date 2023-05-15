import type { Meta, StoryObj } from '@storybook/react'
import SearchBar from '.'
import { SEARCH_CARDS } from '../../../constants/constant'

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const SearchBarComponent: Story = {
  args: {
    placeholder: SEARCH_CARDS,
    width: '33.3%',
  },
}
