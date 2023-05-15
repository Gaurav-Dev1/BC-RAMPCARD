import * as React from 'react'
import {
  Button as MuiButton,
  ButtonPropsColorOverrides,
  styled,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import Typography from '../Typography'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  labelColor?: string
  variant: 'contained' | 'text' | 'outlined'
  color: OverridableStringUnion<
    'primary500' | 'structuralWhite',
    ButtonPropsColorOverrides
  >
  typographyVariant?: 'body2'
  width?: string
  height?: string
  padding?: string
  disable?: boolean
  disableElevation?: boolean
  boxShadow?: string
  border?: string
  borderRadius?: string
}

const StyledButton = styled(MuiButton)((props: ButtonProps) => ({
  boxShadow: props.boxShadow,
  border: props.border,
  borderRadius: props.borderRadius,
}))

const ButtonComponent = (props: ButtonProps) => {
  const {
    onClick,
    label,
    labelColor,
    typographyVariant,
    color,
    variant,
    width,
    height,
    padding,
    disable,
    boxShadow,
    border,
    borderRadius,
  } = props
  return (
    <StyledButton
      data-testid="button"
      disabled={disable}
      variant={variant}
      onClick={onClick}
      color={color}
      style={{
        width: width,
        height: height,
        padding: padding,
        boxShadow: boxShadow,
        border: border,
        borderRadius: borderRadius,
      }}
    >
      <Typography variant={typographyVariant} color={labelColor}>
        {label}
      </Typography>
    </StyledButton>
  )
}

export default ButtonComponent
