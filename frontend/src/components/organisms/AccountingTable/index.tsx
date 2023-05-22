import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid, SelectChangeEvent, styled } from '@mui/material'
import Typography from '../../atoms/Typography'
import theme from '../../../Theme/theme'
import {
  ACCOUNTING_TABLE_HEADINGS,
  QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER,
  QUICKBOOKS_CATEGORY_OPTION,
  SYNC_BUTTON_TEST,
} from '../../../constants/constant'
import CheckBoxComponent from '../../atoms/Checkbox'
import ButtonComponent from '../../atoms/Button'
import DropDown from '../../molecules/DropDown'
import LabelAndValueCard from '../../molecules/LabelAndValueCard'
import Icon from '../../atoms/Icon'
import EyeIcon from '../../../../public/assets/icons/eyeIcon.svg'

const TransactionsRowTableCell = styled(TableCell)({
  display: 'flex',
  alignItems: 'center',
})
const CheckBoxTableHead = styled(TableCell)({
  width: '3.52%',
})

const TableDataHeadingCell = styled(TableCell)({
  width: '10.98%',
  boreder: '1px solid red',
})

const AmountTableRowCell = styled(TableCell)({
  paddingRight: '8px',
})

const AmountContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
})

const DateContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
})

const DateTableRowCell = styled(TableCell)({
  paddingLeft: '8px',
})

const UserContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
})

const UserTableRowCell = styled(TableCell)({
  paddingLeft: '8px',
})
const RecieptContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
})

const RecieptTableRowCell = styled(TableCell)({
  paddingLeft: '8px',
})
const MemoContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
})

const MemoTableRowCell = styled(TableCell)({
  paddingLeft: '8px',
})

const StyledTableRow = styled(TableRow)({
  '&:not(:last-child)': {
    borderBottom: `2px solid ${theme.palette.stroke50.main}`, // Add a border bottom to all rows except the last one
  },
})
export interface AccountingDataType {
  id: string
  type: {
    company: string
    platform: string
  }
  amount: string
  date: string
  user: {
    fullName: string
    userName: string
  }
  receiptNumber: string
  memo: string
  rule: string
}
interface AccountingTableProps {
  accountingTableData: AccountingDataType[]
  onQuickBooksRuleChange?: (event: SelectChangeEvent<unknown>) => void
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkboxes: any
}
const AccountingTable = (props: AccountingTableProps) => {
  const {
    accountingTableData,
    onQuickBooksRuleChange,
    handleCheckbox,
    checkboxes,
  } = props

  return (
    <TableContainer component={Paper} data-testid="accounting-table">
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <CheckBoxTableHead></CheckBoxTableHead>
            {ACCOUNTING_TABLE_HEADINGS.map((data: string, index: number) => (
              <TableDataHeadingCell key={data}>
                <Typography
                  variant="caption2"
                  color={theme.palette.highEmphasis.main}
                >
                  {data}
                </Typography>
              </TableDataHeadingCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {accountingTableData.map((data: AccountingDataType) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <CheckBoxComponent
                  name={String(data.id)}
                  checked={checkboxes[Number(data.id)]}
                  handleChange={handleCheckbox}
                />
              </TableCell>
              <TransactionsRowTableCell>
                <LabelAndValueCard
                  label={data.type.company}
                  value={data.type.platform}
                  labelColor={theme.palette.highEmphasis.main}
                  valueColor={theme.palette.mediumEmphasis.main}
                  labelVariant={'body2'}
                  valueVariant={'body3'}
                  itemGap={'0px'}
                />
                <Icon src={EyeIcon} />
              </TransactionsRowTableCell>
              <AmountTableRowCell>
                <AmountContainer>{data.amount}</AmountContainer>
              </AmountTableRowCell>
              <DateTableRowCell>
                <DateContainer>{data.date}</DateContainer>
              </DateTableRowCell>
              <UserTableRowCell>
                <UserContainer>
                  <LabelAndValueCard
                    label={data.user.fullName}
                    value={data.user.userName}
                    labelColor={theme.palette.highEmphasis.main}
                    valueColor={theme.palette.mediumEmphasis.main}
                    labelVariant={'body2'}
                    valueVariant={'body3'}
                    itemGap="0px"
                  />
                </UserContainer>
              </UserTableRowCell>
              <TableCell>
                <DropDown
                  placeholder={QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER}
                  value={data.rule}
                  name={String(data.id)}
                  onChange={onQuickBooksRuleChange}
                  height="32px"
                  width="96%"
                  items={QUICKBOOKS_CATEGORY_OPTION}
                />
              </TableCell>
              <RecieptTableRowCell>
                <RecieptContainer>{data.receiptNumber}</RecieptContainer>
              </RecieptTableRowCell>
              <MemoTableRowCell>
                <MemoContainer>{data.memo}</MemoContainer>
              </MemoTableRowCell>
              <TableCell>
                <ButtonComponent
                  variant={'text'}
                  color="structuralWhite"
                  label={SYNC_BUTTON_TEST}
                  labelColor={theme.palette.mediumEmphasis.main}
                  height="32px"
                  boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
                  borderRadius="4px"
                  padding="3px 8px 5px"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AccountingTable
