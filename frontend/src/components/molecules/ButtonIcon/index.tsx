import * as React from 'react'
import {
  Button as MuiButton,
  ButtonPropsColorOverrides,
  styled,
} from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import Typography from '../../atoms/Typography'

interface ButtonIconProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  labelColor?: string
  variant: 'contained' | 'text' | 'outlined'
  color: OverridableStringUnion<
    'primary500' | 'structuralWhite' | 'structural100',
    ButtonPropsColorOverrides
  >
  typographyVariant?: 'body2' | 'custom'
  width?: string
  height?: string
  padding?: string
  disable?: boolean
  disableElevation?: boolean
  boxShadow?: string
  border?: string
  borderRadius?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const StyledButton = styled(MuiButton)((props: ButtonIconProps) => ({
  boxShadow: props.boxShadow,
  border: props.border,
  borderRadius: props.borderRadius,
}))

const ButtonIcon = (props: ButtonIconProps) => {
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
    startIcon,
    endIcon,
  } = props
  return (
    <StyledButton
      data-testid="button-icon"
      disabled={disable}
      variant={variant}
      onClick={onClick}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
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

export default ButtonIcon
