import {  render, screen } from '@testing-library/react'
import AccountingTable from '.'
import theme from '../../../Theme/theme'
import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { CHECKBOXES_ARRAY } from '../../../constants/constant'

const accountingTableData = [
  {
    id: '1',
    type: {
      company: 'Company 1',
      platform: 'Platform 1',
    },
    amount: '$100',
    date: '2023-05-01',
    user: {
      fullName: 'John Doe',
      userName: 'johndoe',
    },
    receiptNumber: '12345',
    memo: 'Sample memo',
    rule: 'Travel'
  },
]

const mockHandleChange = jest.fn()
describe('AccountingTable unit test', () => {
  it('renders accounting table with data', () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountingTable accountingTableData={accountingTableData} handleCheckbox={mockHandleChange } checkboxes={CHECKBOXES_ARRAY} />
      </ThemeProvider>
    )

    expect(screen.getByText('TRANSACTIONS')).toBeInTheDocument()
    expect(screen.getByText('AMOUNT')).toBeInTheDocument()
    expect(screen.getByText('DATE')).toBeInTheDocument()
    expect(screen.getByText('USER')).toBeInTheDocument()
    expect(screen.getByText('RECEIPT')).toBeInTheDocument()
    expect(screen.getByText('MEMO')).toBeInTheDocument()

    accountingTableData.forEach((data) => {
      expect(screen.getByText(data.type.company)).toBeInTheDocument()
      expect(screen.getByText(data.type.platform)).toBeInTheDocument()
      expect(screen.getByText(data.amount)).toBeInTheDocument()
      expect(screen.getByText(data.date)).toBeInTheDocument()
      expect(screen.getByText(data.user.fullName)).toBeInTheDocument()
      expect(screen.getByText(data.user.userName)).toBeInTheDocument()
      expect(screen.getByText(data.receiptNumber)).toBeInTheDocument()
      expect(screen.getByText(data.memo)).toBeInTheDocument()
    })
  })

})
