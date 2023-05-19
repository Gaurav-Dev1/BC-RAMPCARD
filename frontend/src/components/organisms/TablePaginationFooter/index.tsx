import { Grid, styled } from '@mui/material'
import Typography from '../../atoms/Typography'
import theme from '../../../Theme/theme'
import {
    PAGINATION_NEXT_BUTTON_LABEL,
  PAGINATION_PREV_BUTTON_LABEL,
  PAGINATION_RESULTS_MOCK_COUNT,
} from '../../../constants/constant'
import ButtonComponent from '../../atoms/Button'

const PaginationContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const NextAndPrevContainer = styled(Grid)({
  display: 'flex',
  gap: '8px',
})

const TablePaginationFooter = () => {
  return (
    <PaginationContainer data-testid='pagination-footer'>
      <Typography variant={'body2'} color={theme.palette.mediumEmphasis.main}>
        {PAGINATION_RESULTS_MOCK_COUNT}
      </Typography>
      <NextAndPrevContainer>
        <ButtonComponent
          variant={'text'}
          color={'structuralWhite'}
          label={PAGINATION_PREV_BUTTON_LABEL}
          typographyVariant='body2'
          labelColor={theme.palette.lowEmphasis.main}
          padding='3px 8px 5px 8px'
          borderRadius='4px'
          boxShadow='0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)'
        />
        <ButtonComponent
          variant={'text'}
          color={'structuralWhite'}
          label={PAGINATION_NEXT_BUTTON_LABEL}
          typographyVariant='body2'
          labelColor={theme.palette.lowEmphasis.main}
          padding='3px 8px 5px 8px'
          borderRadius='4px'
          boxShadow='0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)'
        />
      </NextAndPrevContainer>
    </PaginationContainer>
  )
}

export default TablePaginationFooter
