import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styled from '@emotion/styled'
import theme from '../../../Theme/theme'
import Icon from '../../atoms/Icon'
import DropDownIcon from '../../../../public/assets/icons/dropDownIcon.svg'
import Typography from '../../atoms/Typography'

const StyledSelect = styled(Select)({
  border: `1px solid ${theme.palette.stroke100.main}`,
  borderRadius: '8px',
  background: `${theme.palette.structuralWhite.main} !important`,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    padding: '0px',
  },
})

interface TextSelectProps {
  value: string
  onChange: (event: SelectChangeEvent<unknown>) => void
  items: string[]
}
const TextSelect = (props: TextSelectProps) => {
  const { value, onChange, items } = props

  return (
    <FormControl fullWidth>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value === '' ? 'Choose' : value}
        onChange={onChange}
        variant="outlined"
        style={{ height: '32px', width: '144px', padding: '7px 8px 7px 8px' }}
        IconComponent={() => <Icon src={DropDownIcon} />}
        MenuProps={{
          PaperProps: {
              style: {
                  borderRadius: '6px',
                  border: `1px solid ${theme.palette.stroke100.main}`,
                  boxShadow:
                      '0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)',
                  color: theme.palette.lowEmphasis.main,
                  marginTop: '4px'
              }
          }
      }}
      >
        {items.map((item) => (
          <MenuItem value={item}><Typography variant='body2' color={theme.palette.lowEmphasis.main}>{item}</Typography></MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}

export default TextSelect
