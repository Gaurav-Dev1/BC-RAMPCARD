import type { Meta, StoryObj } from '@storybook/react'
import Icon from '.'
import SearchIcon from '../../../../public/assets/icons/SearchIcon.svg'
import CalendarIcon from '../../../../public/assets/icons/calendarIcon.svg'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import RightArrowIcon from '../../../../public/assets/icons/rightArrow.svg'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

export const Search: Story = {
  args: {
    src: SearchIcon
  },
}

export const Calender: Story = {
  args: {
    src: CalendarIcon
  },
}

export const Clear: Story = {
  args: {
    src: ClearIcon
  },
}

export const RightArrow: Story = {
  args: {
    src: RightArrowIcon
  },
}
