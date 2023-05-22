import type { Meta, StoryObj } from '@storybook/react'
import AccountingTable from '.'
import { accountingTabledata } from '../../../Data/AccountTableData'
import { CHECKBOXES_ARRAY } from '../../../constants/constant'

const meta: Meta<typeof AccountingTable> = {
  title: 'Organisms/AccountingTable',
  component: AccountingTable,
}

export default meta
type Story = StoryObj<typeof AccountingTable>

export const AccountingTableComponent: Story = {
    args: {
        accountingTableData: accountingTabledata,
        checkboxes:CHECKBOXES_ARRAY
    }
}
