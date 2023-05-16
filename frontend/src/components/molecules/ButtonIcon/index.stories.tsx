import type { Meta, StoryObj } from '@storybook/react'
import ButtonIcon from '.'
import theme from '../../../Theme/theme'
import FilterIcon from '../../../../public/assets/icons/filterIcon.svg'
import DeleteIcon from '../../../../public/assets/icons/deleteIcon.svg'
import WhiteDownIcon from '../../../../public/assets/icons/whiteDownChevron.svg'
import Icon from '../../atoms/Icon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const FilterButton: Story = {
  args: {
    label: 'Filter',
    color: 'primary500',
    variant: 'text',
    labelColor: theme.palette.primary500.main,
    padding: '3px 8px 5px 8px',
    typographyVariant: 'custom',
    startIcon: <Icon src={FilterIcon} />,
  },
}

export const DeleteButtonIcon: Story = {
  args: {
    label: 'Delete',
    color: 'structuralWhite',
    variant: 'text',
    labelColor: theme.palette.lowEmphasis.main,
    padding: '3px 8px 5px',
    typographyVariant: 'custom',
    startIcon: <Icon src={DeleteIcon} />,
  },
}

export const AccountingButtonIcon: Story = {
  args: {
    variant: 'contained',
    borderRadius: '40px',
    color: 'primary500',
    label: 'Accounting',
    typographyVariant: 'body2',
    labelColor: theme.palette.structuralWhite.main,
    height: '24px',
    padding: '1px 10px 3px',
    width: '117px',
    endIcon: <Icon src={WhiteDownIcon} />,
  },
}
