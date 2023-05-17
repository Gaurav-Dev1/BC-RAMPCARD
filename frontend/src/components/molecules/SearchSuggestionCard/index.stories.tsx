import type { Meta, StoryObj } from '@storybook/react'
import SearchSuggestionCard from '.'
import { SEARCHED_TEXT } from '../../../constants/constant'

const meta: Meta<typeof SearchSuggestionCard> = {
  title: 'Molecules/SearchSuggestionCard',
  component: SearchSuggestionCard,
}

export default meta
type Story = StoryObj<typeof SearchSuggestionCard>

export const Card: Story = {
  args: {
    searchedText: SEARCHED_TEXT,
  },
}
