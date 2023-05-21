import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import theme from '../../../Theme/theme'

interface ModalComponentProps {
  open: boolean
  onClose?: () => void
  children: React.ReactNode
  top?: string
  left?: string
  height?: string
  width?: string
}

const ModalComponent = (props: ModalComponentProps) => {
  const { open, onClose, children, top, left, height, width } = props
  return (
    <div data-testid='modal'>
      <Modal
        open={open}
        onClose={onClose}
        
      >
        <Box
          sx={{
            position: 'absolute',
            top: top,
            left: left,
            transform: 'translate(-50%, -50%)',
            background: theme.palette.structuralWhite.main,
            borderRadius: '6px',
            outline: 'none',
            height: height,
            width: width,
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
