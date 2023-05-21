import { Grid, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import { NavBarButtonLabels } from '../../../constants/constant'
import ButtonIcon from '../../molecules/ButtonIcon'
import WhiteChevronDownIcon from '../../../../public/assets/icons/whiteDownChevron.svg'
import ChevronDownIcon from '../../../../public/assets/icons/downChevron.svg'
import Icon from '../../atoms/Icon'
import React from 'react'

const NavBarMainContainer = styled(Grid)({
  background: theme.palette.structuralWhite.main,
  height: '40px',
  paddingLeft: '40px',
  paddingRight: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const LeftContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
const RightContainer = styled(Grid)({
  display: 'flex',
})
const NavBar = () => {
  const [navigationSate, setNavigationState] = React.useState<boolean>(false)

  const handleAccountingClick = () => {
    setNavigationState(!navigationSate)
  }
  const handleInsightsPageClick = () => {
    setNavigationState(!navigationSate)
  }
  return (
    <NavBarMainContainer container data-testid="navbar">
      <LeftContainer item>
        {!navigationSate && (
          <div data-testid="active-insights">
            <ButtonIcon
              variant={'contained'}
              color={'primary500'}
              label={NavBarButtonLabels[0]}
              labelColor={theme.palette.structuralWhite.main}
              borderRadius="40px"
              height="26px"
              width="94px"
              boxShadow="none"
              padding="
            1px 10px 3px 10px"
              endIcon={<Icon src={WhiteChevronDownIcon} />}
              onClick={handleInsightsPageClick}
            />
          </div>
        )}
        {navigationSate && (
          <div data-testid="inactive-insights">
            <ButtonIcon
              variant={'text'}
              label={NavBarButtonLabels[0]}
              color={'structuralWhite'}
              labelColor={theme.palette.highEmphasis.main}
              height="24px"
              width="94px"
              padding="
            1px 10px 3px 10px"
              endIcon={<Icon src={ChevronDownIcon} />}
              onClick={handleInsightsPageClick}
            />
          </div>
        )}

        <ButtonIcon
          variant={'text'}
          label={NavBarButtonLabels[1]}
          color={'structuralWhite'}
          labelColor={theme.palette.highEmphasis.main}
          padding="
            1px 10px 3px 10px"
          height="24px"
          width="117px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={NavBarButtonLabels[2]}
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          width="80px"
          padding="
            1px 10px 3px 10px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={NavBarButtonLabels[3]}
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          width="105px"
          padding="1px 10px 3px 10px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={NavBarButtonLabels[4]}
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          width="91px"
          padding="
            1px 10px 3px 10px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={NavBarButtonLabels[5]}
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          width="96px"
          padding="1px 10px 3px 10px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={NavBarButtonLabels[6]}
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          width="145px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
        {!navigationSate && (
          <div data-testid="inactive-accounting">
            <ButtonIcon
              variant={'text'}
              color={'structuralWhite'}
              label={NavBarButtonLabels[7]}
              labelColor={theme.palette.highEmphasis.main}
              height="24px"
              width="117px"
              padding="
            1px 10px 3px 10px"
              endIcon={<Icon src={ChevronDownIcon} />}
              onClick={handleAccountingClick}
            />
          </div>
        )}
        {navigationSate && (
          <div data-testid="active-accounting">
            <ButtonIcon
              variant={'contained'}
              color={'primary500'}
              label={NavBarButtonLabels[7]}
              labelColor={theme.palette.structuralWhite.main}
              borderRadius="40px"
              height="26px"
              width="117px"
              boxShadow="none"
              padding="
            1px 10px 3px 10px"
              endIcon={<Icon src={WhiteChevronDownIcon} />}
              onClick={handleAccountingClick}
            />
          </div>
        )}
      </LeftContainer>
      <RightContainer item>
        <ButtonIcon
          variant={'text'}
          color={'structuralWhite'}
          label={'Ramp perks'}
          width="120px"
          labelColor={theme.palette.highEmphasis.main}
          height="24px"
          endIcon={<Icon src={ChevronDownIcon} />}
        />
      </RightContainer>
    </NavBarMainContainer>
  )
}

export default NavBar
