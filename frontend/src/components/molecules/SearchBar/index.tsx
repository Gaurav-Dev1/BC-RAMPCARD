import { Grid, TextField, styled } from '@mui/material'
import Icon from '../../atoms/Icon'
import theme from '../../../Theme/theme'
import SearchIcon from '../../../../public/assets/icons/SearchIcon.svg'
import { ChangeEvent } from 'react'

interface SearchBarProps {
  width?: string
  placeholder?: string
  handleChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const SearchBarMainContainer = styled(Grid)((props: SearchBarProps) => ({
  background: theme.palette.structuralWhite.main,
  borderRadius: '12px',
  border: `1px solid ${theme.palette.stroke50.main}`,
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '8px',
  paddingRight: '8px',
}))

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-notchedOutline ': {
    border: 'none',
  },
  '& .MuiInputBase-input': {
    height: '16px',
    padding: '6px 8px',
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    textTransform: 'none',
    color: theme.palette.highEmphasis.main,
  },
  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    textTransform: 'none',
    color: theme.palette.lowEmphasis.main,
  },
})
const SearchBar = (props: SearchBarProps) => {
  const { placeholder, width, handleChange } = props

  return (
    <SearchBarMainContainer container width={width} data-testid="searchbar">
      <Grid item direction={'row'} display={'flex'}>
        <Icon src={SearchIcon} />
      </Grid>
      <Grid item>
        <StyledTextField placeholder={placeholder} onChange={handleChange} />
      </Grid>
    </SearchBarMainContainer>
  )
}

export default SearchBar
