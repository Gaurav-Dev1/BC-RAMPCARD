import {  render, screen } from '@testing-library/react'
import AccountingTable from '.'
import theme from '../../../Theme/theme'
import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'

const accountingTableData = [
  {
    id: 1,
    transactions: {
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
    rule: 'rule'
  },
]

const mockHandleChange = jest.fn()
describe('AccountingTable unit test', () => {
  it('renders accounting table with data', () => {
    render(
      <ThemeProvider theme={theme}>
        <AccountingTable accountingTableData={accountingTableData} handleCheckbox={mockHandleChange } checkboxes={[1,2,3]} />
      </ThemeProvider>
    )

    expect(screen.getByText('TRANSACTIONS')).toBeInTheDocument()
    expect(screen.getByText('AMOUNT')).toBeInTheDocument()
    expect(screen.getByText('DATE')).toBeInTheDocument()
    expect(screen.getByText('USER')).toBeInTheDocument()
    expect(screen.getByText('RECEIPT')).toBeInTheDocument()
    expect(screen.getByText('MEMO')).toBeInTheDocument()

    accountingTableData.forEach((data) => {
      expect(screen.getByText(data.transactions.company)).toBeInTheDocument()
      expect(screen.getByText(data.transactions.platform)).toBeInTheDocument()
      expect(screen.getByText(data.amount)).toBeInTheDocument()
      expect(screen.getByText(data.date)).toBeInTheDocument()
      expect(screen.getByText(data.user.fullName)).toBeInTheDocument()
      expect(screen.getByText(data.user.userName)).toBeInTheDocument()
      expect(screen.getByText(data.receiptNumber)).toBeInTheDocument()
      expect(screen.getByText(data.memo)).toBeInTheDocument()
    })
  })

  // it('handles checkbox click event', () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <AccountingTable accountingTableData={accountingTableData} handleCheckbox={function (e: ChangeEvent<HTMLInputElement>): void {
  //         throw new Error('Function not implemented.')
  //       } } checkboxes={[false,false,false]} />
  //     </ThemeProvider>
  //   )

  //   const checkbox = screen.getByRole('checkbox', {
  //     name: 'controlled',
  //   }) as HTMLInputElement
  //   expect(checkbox.checked).toBe(false)

  //   fireEvent.click(checkbox)

  //   expect(checkbox.checked).toBe(true)
  // })
})
