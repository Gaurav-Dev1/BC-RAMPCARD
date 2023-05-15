import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';
import theme from '../../../Theme/theme';
import Icon from '../../atoms/Icon';
import DropDownIcon from '../../../../public/assets/icons/dropDownIcon.svg';

const StyledSelect = styled(Select)({
  border: `1px solid ${theme.palette.stroke100.main}`,
  borderRadius: '8px',
  background: `${theme.palette.structuralWhite.main} !important`,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    padding: "0px",
  },
});

const TextSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label" shrink={false}>{age ==='' ? 'label' : ''}</InputLabel> */}
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age === '' ? 'label' : age}
        onChange={handleChange}
        variant='outlined'
        style={{height: '32px',width: '144px' , padding: '7px 8px 7px 8px'}}
        IconComponent={() => <Icon src={DropDownIcon} />}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </StyledSelect>
    </FormControl>
  );
}

export default TextSelect;
