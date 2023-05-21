import { Box, Grid, SelectChangeEvent, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import Typography from '../../atoms/Typography'
import {
  MERCHANT_RULE_MODAL_CONTENT,
  MERCHANT_RULE_MODAL_HEADING,
  MERCHANT_RULE_MODAL_TRANSACTIONS_INFO,
  QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER,
  QUICKBOOKS_CATEGORY_OPTION,
} from '../../../constants/constant'
import ButtonComponent from '../../atoms/Button'
import DropDown from '../../molecules/DropDown'
import { useState } from 'react'
import ModalComponent from '../../molecules/Modal'

const MainContainer = styled(Grid)({
  background: theme.palette.structuralWhite.main,
  borderRadius: '4px'
})

const MainMiddleContainer = styled(Grid)({
  padding: '16px 20px',
})

const MainMiddleContainerItem = styled(Grid)({
  gap: '16px',
  display: 'flex',
  flexDirection: 'column',
})

const ModalMainContentContainer = styled(Box)({})

const HeaderContainer = styled(Grid)({
  padding: '16px 12px 16px 20px',
  borderBottom: `1px solid ${theme.palette.stroke100.main}`,
})

const FooterContainer = styled(Grid)({
  padding: '14px 20px 14px 20px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.stroke100.main}`,
  borderRadius: '0px 0px 6px 6px',
})

const FooterButtonsContainer = styled(Grid)({
  display: 'flex',
  gap: '12px',
})

const DropDownContainer = styled(Grid)({
  gap: '4px',
  display: 'flex',
  flexDirection: 'column',
})

interface MerchantRuleModalProps {
  modalOpenState: boolean
}
const MerchantRuleModal = (props: MerchantRuleModalProps) => {
  const { modalOpenState } = props
  const [quickbookRule, setQuickBookRule] = useState<string>('')
  const [open, setOpen] = useState<boolean>(modalOpenState)

  const handleQuickBooksCategoryChange = (
    event: SelectChangeEvent<unknown>
  ) => {
    setQuickBookRule(event.target.value as string)
  }

  const onCreateRuleButtonClick = () => {
    setOpen(false)
  }

  const onCancelButtonClick = () => {
    setOpen(false)
  }

  return (
    <ModalComponent open={open} top="50%" left="50%" width="29%">
      <MainContainer data-testid="create-merchant-rule-modal">
        <HeaderContainer>
          <Typography variant="body2" color={theme.palette.highEmphasis.main}>
            {MERCHANT_RULE_MODAL_HEADING}
          </Typography>
        </HeaderContainer>
        <MainMiddleContainer>
          <MainMiddleContainerItem item>
            <ModalMainContentContainer>
              <Typography
                variant={'body2'}
                color={theme.palette.highEmphasis.main}
              >
                {MERCHANT_RULE_MODAL_CONTENT}
              </Typography>
            </ModalMainContentContainer>
            <DropDownContainer>
              <DropDown
                value={quickbookRule}
                placeholder={QUICKBOOKS_CATEGORY_DROPDOWN_PLACEHOLDER}
                onChange={handleQuickBooksCategoryChange}
                items={QUICKBOOKS_CATEGORY_OPTION}
                width="65%"
                height="28px"
              />
              <Typography
                variant="caption1"
                color={theme.palette.accentRed100.main}
              >
                {MERCHANT_RULE_MODAL_TRANSACTIONS_INFO}
              </Typography>
            </DropDownContainer>
          </MainMiddleContainerItem>
        </MainMiddleContainer>
        <FooterContainer>
          <FooterButtonsContainer>
            <ButtonComponent
              variant={'text'}
              color={'structuralWhite'}
              label="Cancel"
              labelColor={theme.palette.mediumEmphasis.main}
              boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
              borderRadius="4px"
              border="1px solid rgba(60, 66, 87, 0.12)"
              padding="3px 8px 5px"
              height="32px"
              width="58px"
              typographyVariant="body2"
              onClick={onCancelButtonClick}
            />
            <ButtonComponent
              variant={'contained'}
              color={'primary500'}
              label="Create rule"
              labelColor={theme.palette.structuralWhite.main}
              borderRadius="4px"
              border="1px solid rgba(60, 66, 87, 0.12)"
              padding="3px 8px 5px 8px"
              typographyVariant="body2"
              boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
              onClick={onCreateRuleButtonClick}
            />
          </FooterButtonsContainer>
        </FooterContainer>
      </MainContainer>
    </ModalComponent>
  )
}

export default MerchantRuleModal
