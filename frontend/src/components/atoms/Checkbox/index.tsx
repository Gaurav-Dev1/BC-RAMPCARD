import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import theme from '../../../Theme/theme';
import { styled } from '@mui/material';

interface CheckBoxComponentProps {
    checked: boolean;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }


export default function CheckBoxComponent(props: CheckBoxComponentProps) {

  const { checked , handleChange} = props;

  const StyledCheckbox = styled(Checkbox)({
    color: `${theme.palette.stroke100.main}`,
    borderRadius: "4px",
    height: "14px",
    '&.Mui-checked': {
        color: `${theme.palette.primary500.main}`,
      },
})
  return (
    <StyledCheckbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      disableRipple
      data-testid="checkbox"
    />
  );
}
