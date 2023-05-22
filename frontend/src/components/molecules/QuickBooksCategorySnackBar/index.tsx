import * as React from 'react'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import { Grid, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import Icon from '../../atoms/Icon'
import InfoIcon from '../../../../public/assets/icons/infoIcon.svg'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import Typography from '../../atoms/Typography'
import {
  MERCHANT_RULE_SNACKBAR_BUTTON_TEXT,
  MERCHANT_RULE_SNACKBAR_CONTENT,
  MERCHANT_RULE_SNACKBAR_HEADING,
} from '../../../constants/constant'
import IconButtonComponent from '../../atoms/IconButton'
import ButtonComponent from '../../atoms/Button'

export interface State extends SnackbarOrigin {
  open: boolean
}

const QuickBooksCategorySnackBar = (props: any) => {
  const [state, setState] = React.useState<State>({
    open: props.open,
    vertical: 'bottom',
    horizontal: 'right',
  })
  const { vertical, horizontal, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  const MerchantRuleSnackBarMainContainer = styled(Grid)({
    padding: '16px',
    gap: '16px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #E0E6EB',
    background: theme.palette.structuralWhite.main,
  })

  const MerchantRuleSnackBarInnerContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    width: '312px',
  })
  const MerchantRuleSnackBarHeader = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
  })
  return (
    <div data-testid='quickbooks-category-snackbar'>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        data-testid='snackbar'
      >
        <MerchantRuleSnackBarMainContainer container>
          <MerchantRuleSnackBarInnerContainer>
            <MerchantRuleSnackBarHeader>
              <Grid item>
                <Icon src={InfoIcon} />
              </Grid>
              <Grid item paddingLeft={'12px'} width={'228px'}>
                <Typography
                  variant="body2"
                  color={theme.palette.textIconPrimary.main}
                >
                  {MERCHANT_RULE_SNACKBAR_HEADING}
                </Typography>
              </Grid>
              <Grid item paddingLeft={'40px'}>
                <IconButtonComponent src={ClearIcon} onClick={handleClose} />
              </Grid>
            </MerchantRuleSnackBarHeader>
            <Grid item paddingLeft={'24px'}>
              <Typography
                variant="body3"
                color={theme.palette.lowEmphasis.main}
              >
                {MERCHANT_RULE_SNACKBAR_CONTENT}
              </Typography>
            </Grid>
            <Grid item paddingLeft={'16px'} paddingTop={'16px'}>
              <ButtonComponent
                variant="outlined"
                color="structuralWhite"
                label={MERCHANT_RULE_SNACKBAR_BUTTON_TEXT}
                labelColor={theme.palette.mediumEmphasis.main}
                padding="3px 8px 5px"
                boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
                borderRadius="4px"
              />
            </Grid>
          </MerchantRuleSnackBarInnerContainer>
        </MerchantRuleSnackBarMainContainer>
      </Snackbar>
    </div>
  )
}

export default QuickBooksCategorySnackBar
