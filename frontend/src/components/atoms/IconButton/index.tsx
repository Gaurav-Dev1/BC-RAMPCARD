import React from 'react'
import { ReactSVG } from 'react-svg'
import { styled } from '@mui/material'
import { ICONBUTTON_TESTID } from '../../../constants/constant'

export interface IconButtonProps {
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  src: string
  width?: string
  height?: string
}
const StyledReactSVG = styled(ReactSVG)((props: IconButtonProps) => ({
  cursor: 'pointer',
  width: props.width,
}))

const IconButtonComponent = (props: IconButtonProps) => {
  const { style, onClick, src, width, height } = props

  return (
    <div>
      <StyledReactSVG
        src={src}
        style={style}
        onClick={onClick}
        data-testid={ICONBUTTON_TESTID}
        width={width}
        height={height}
      />
    </div>
  )
}

export default IconButtonComponent
