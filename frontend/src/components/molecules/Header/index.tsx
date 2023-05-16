import { Grid, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import ButtonIcon from '../ButtonIcon'
import { SETUP_GUIDE } from '../../../constants/constant'
import Icon from '../../atoms/Icon'
import RightArrowIcon from '../../../../public/assets/icons/rightArrow.svg'
import ProfileIcon from '../../../../public/assets/icons/profileIcon.svg'

const HeaderContainer = styled(Grid)({
  display: 'flex',
  height: '44px',
  background: theme.palette.structural50.main,
  paddingRight: '80px',
  paddingLeft: '40px',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Header = () => {
  return (
    <HeaderContainer container data-testid="header">
      <Grid item>
        <ButtonIcon
          height="24px"
          width="125px"
          label={SETUP_GUIDE}
          variant={'contained'}
          color={'structural100'}
          labelColor={theme.palette.primary500.main}
          borderRadius="40px"
          typographyVariant="body2"
          padding="1px 10px 3px"
          endIcon={<Icon src={RightArrowIcon} />}
          boxShadow="none"
        />
      </Grid>
      <Grid item>
        <Icon src={ProfileIcon} />
      </Grid>
    </HeaderContainer>
  )
}

export default Header
