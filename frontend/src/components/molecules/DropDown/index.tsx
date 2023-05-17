import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import theme from '../../../Theme/theme'
import Icon from '../../atoms/Icon'
import DropDownIcon from '../../../../public/assets/icons/dropDownIcon.svg'
import Typography from '../../atoms/Typography'
import { ReactNode } from 'react'
import { styled } from '@mui/material'

const StyledSelect = styled(Select)({
  border: `1px solid ${theme.palette.stroke100.main}`,
  borderRadius: '8px',
  background: `${theme.palette.structuralWhite.main} !important`,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    padding: '0px !important',
  },
})

interface DropDownProps {
  value: unknown
  onChange: (event: SelectChangeEvent<unknown>) => void
  items: string[]
  placeholder?: string
  width?: string
  height?: string
}
const DropDown = (props: DropDownProps) => {
  const renderIcon = () => {
    return <Icon src={DropDownIcon} />
  }
  const { value, onChange, items, placeholder, height, width } = props
  const renderValue = (selected: unknown): ReactNode => {
    if (selected === '') {
      return (
        <Typography
          variant="body3"
          sx={{ color: theme.palette.lowEmphasis.main }}
        >
          {placeholder}
        </Typography>
      )
    }
    return selected as ReactNode
  }

  return (
    <StyledSelect
      data-testid="text-select"
      displayEmpty
      value={value}
      onChange={onChange}
      IconComponent={renderIcon}
      style={{ height: height, width: width, paddingRight: '8px' }}
      renderValue={renderValue}
      MenuProps={{
        PaperProps: {
          style: {
            borderRadius: '6px',
            border: '1px solid ' + theme.palette.stroke100.main,
            boxShadow:
              '0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)',
            color: theme.palette.lowEmphasis.main,
            marginTop: '4px',
          },
        },
      }}
    >
      {items.map((item) => (
        <MenuItem key={item} value={item} data-testid={item}>
          <Typography variant="body2">{item}</Typography>
        </MenuItem>
      ))}
    </StyledSelect>
  )
}

export default DropDown
