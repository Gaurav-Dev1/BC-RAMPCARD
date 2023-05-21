import { Grid, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import Typography from '../../atoms/Typography'
import {
  REPORTING_CARD_FOOTER_BUTTON_LABEL,
  REPORTING_CARD_POTENTIAL_SAVINGS_TEXT,
  REPORTING_CARD_POTENTIAL_SAVINGS_VALUE,
} from '../../../constants/constant'
import Image from '../../atoms/Image'
import AwsImg from '../../../../public/assets/images/aws.svg'
import RightArrow from '../../../../public/assets/icons/rightArrow.svg'
import LabelAndValueCard from '../LabelAndValueCard'
import ButtonIcon from '../ButtonIcon'
import Icon from '../../atoms/Icon'

interface ReportingCardProps {
  heading: string
  content: string
}

const ReportingCardMainContainer = styled(Grid)({
  width: '19.76%',
  background: theme.palette.structuralWhite.main,
  paddingTop: '4px',
})

const ContentContainer = styled(Grid)({
  marginTop: '8px',
})

const ImageAndSavingContainer = styled(Grid)({
  marginTop: '14px',
  display: 'flex',
  gap: '9px',
  alignItems: 'center',
})

const ReportingCardFooterContainer = styled(Grid)({
  marginTop: '16px',
  
})

const ReportingCard = (props: ReportingCardProps) => {
  const {heading, content} = props;
  return (
    <ReportingCardMainContainer container data-testid = 'reporting-card'>
      <Typography variant="subtitle2" color={theme.palette.highEmphasis.main}>
        {heading}
      </Typography>
      <ContentContainer>
        <Typography variant="subtitle3" color={theme.palette.lowEmphasis.main}>
          {content}
        </Typography>
      </ContentContainer>
      <ImageAndSavingContainer>
        <Image src={AwsImg} />
        <LabelAndValueCard
          label={REPORTING_CARD_POTENTIAL_SAVINGS_TEXT}
          value={REPORTING_CARD_POTENTIAL_SAVINGS_VALUE}
          labelColor={theme.palette.lowEmphasis.main}
          valueColor={theme.palette.accentGreen100.main}
          labelVariant={'caption2'}
          valueVariant={'subtitle2'}
        />
      </ImageAndSavingContainer>
      <ReportingCardFooterContainer>
        <ButtonIcon
          variant={'text'}
          color={'primary500'}
          label={REPORTING_CARD_FOOTER_BUTTON_LABEL}
          endIcon={<Icon src={RightArrow} />}
          height="24px"
          typographyVariant="body2"
          padding="
2px 0px 2px 0px"
        />
      </ReportingCardFooterContainer>
    </ReportingCardMainContainer>
  )
}

export default ReportingCard
