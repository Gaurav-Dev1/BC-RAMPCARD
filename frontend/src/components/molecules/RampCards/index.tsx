import { Grid, styled } from '@mui/material'
import Typography from '../../atoms/Typography'
import {
  CATEGORY_RULES,
  CATEGORY_RULES_MOCK_VALUE,
  DEPARTMENT_RULES,
  DEPARTMENT_RULES_MOCK_VALUE,
  LOCATION_RULES,
  LOCATION_RULES_MOCK_VALUE,
  MERCHANT_RULES,
  MISSING_ITEMS,
  MISSING_ITEMS_MOCK_VALUE,
  RAMPCARDS_TEXT,
} from '../../../constants/constant'
import theme from '../../../Theme/theme'
import LabelAndValueCard from '../LabelAndValueCard'

const MainRampCardsContainer = styled(Grid)({
  gap: '28px',
  display: 'flex',
  flexDirection: 'column',
})
const RampCardsHeader = styled(Grid)({})

interface RampCardsProps {
  width?: string
  merchantRulesCount: number
}

const RampCardsFooter = styled(Grid)({
  gap: '42px',
  display: 'flex',
})

const RampCards = (props: RampCardsProps) => {
  const { merchantRulesCount, width } = props
  return (
    <MainRampCardsContainer container width={width} data-testId="ramp-cards">
      <RampCardsHeader item>
        <Typography variant="h1" color={theme.palette.highEmphasis.main}>
          {RAMPCARDS_TEXT}
        </Typography>
      </RampCardsHeader>
      <RampCardsFooter item>
        <LabelAndValueCard
          label={MISSING_ITEMS}
          value={MISSING_ITEMS_MOCK_VALUE}
          labelColor={theme.palette.highEmphasis.main}
          valueColor={theme.palette.accentRed100.main}
          labelVariant={'body3'}
          valueVariant={'body2'}
        />
        <LabelAndValueCard
          label={MERCHANT_RULES}
          value={merchantRulesCount}
          labelColor={theme.palette.highEmphasis.main}
          valueColor={theme.palette.primary500.main}
          labelVariant={'body3'}
          valueVariant={'body2'}
        />
        <LabelAndValueCard
          label={CATEGORY_RULES}
          value={CATEGORY_RULES_MOCK_VALUE}
          labelColor={theme.palette.highEmphasis.main}
          valueColor={theme.palette.primary500.main}
          labelVariant={'body3'}
          valueVariant={'body2'}
        />
        <LabelAndValueCard
          label={DEPARTMENT_RULES}
          value={DEPARTMENT_RULES_MOCK_VALUE}
          labelColor={theme.palette.highEmphasis.main}
          valueColor={theme.palette.lowEmphasis.main}
          labelVariant={'body3'}
          valueVariant={'body2'}
        />
        <LabelAndValueCard
          label={LOCATION_RULES}
          value={LOCATION_RULES_MOCK_VALUE}
          labelColor={theme.palette.highEmphasis.main}
          valueColor={theme.palette.lowEmphasis.main}
          labelVariant={'body3'}
          valueVariant={'body2'}
        />
      </RampCardsFooter>
    </MainRampCardsContainer>
  )
}

export default RampCards
