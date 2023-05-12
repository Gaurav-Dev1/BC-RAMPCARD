import { Typography as MuiTypography, SxProps, Theme } from '@mui/material'
import React from 'react'

interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption1'
    | 'caption2'
    | undefined
  color?: string
  sx?: SxProps<Theme>
  children: React.ReactNode
}

const Typography = (props: TypographyProps) => {
  const { variant, color, sx, children } = props
  return (
    <MuiTypography variant={variant} color={color} sx={sx}>
      {children}
    </MuiTypography>
  )
}

export default Typography
