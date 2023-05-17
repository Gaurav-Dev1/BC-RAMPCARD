import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { SelectChangeEvent, styled } from '@mui/material'
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
import { useState } from 'react'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const CheckBoxTableHead = styled(TableCell)({
  width: '3.52%',
  background: 'red',
})

const TableDataHeadingCell = styled(TableCell)({
  width: '10.98%',
})

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const AccountingTable = () => {
  const [quickbookRule, setQuickBookRule] = useState<string>('')

  const handleQuickBooksCategoryChange = (
    event: SelectChangeEvent<unknown>
  ) => {
    setQuickBookRule(event.target.value as string)
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <CheckBoxTableHead></CheckBoxTableHead>
            {ACCOUNTING_TABLE_HEADINGS.map((data: string) => (
              <TableDataHeadingCell>
                <Typography
                  variant="caption2"
                  color={theme.palette.highEmphasis.main}
                >
                  {data}
                </Typography>
              </TableDataHeadingCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <CheckBoxComponent checked={false} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>
                <DropDown
                  placeholder={QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER}
                  value={quickbookRule}
                  height='32px'
                  width='89.33%'
                  onChange={handleQuickBooksCategoryChange}
                  items={QUICKBOOKS_CATEGORY_OPTION}
                />
              </TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.protein}</TableCell>
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
