import { Box, styled } from '@mui/material'
import theme from '../../../Theme/theme'
import Typography from '../../atoms/Typography'
import {
  SEARCH_SUGGESTION_CARD_FOOTER_TEXT,
  SEARCH_SUGGESTION_CARD_HEADER_TEXT,
  SEARCH_SUGGESTION_TEST_ID,
  TRANSACTIONS,
} from '../../../constants/constant'
import Icon from '../../atoms/Icon'
import QuestionIcon from '../../../../public/assets/icons/questionIcon.svg'
interface SearchSuggestionCardProps {
  searchedText: string
  onClick?: () => void
}
const SearchSuggestionCardMainContainer = styled(Box)({
  border: `1px solid ${theme.palette.stroke100.main}`,
  borderRadius: '6px',
  boxShadow:
    '0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)',
  width: '588px',
  background: theme.palette.structuralWhite.main,
  zIndex: 100,
  position: 'absolute'
})

const CardHeader = styled(Box)({
  display: 'flex',
  paddingLeft: '26px',
  paddingBottom: '8px',
  paddingTop: '16px',
  borderBottom: `1px solid ${theme.palette.stroke50.main}`,
  gap: '4px',
})

const CardMiddleContainer = styled(Box)({
  paddingLeft: '26px',
  paddingTop: '8px',
})

const SearchedTextContainer = styled(Box)({
  marginTop: '16px',
  paddingLeft: '26px',
})

const SuggestionCardFooterContainer = styled(Box)({
  paddingLeft: '26px',
  paddintTop: '9px',
  background: theme.palette.structural50.main,
  borderRadius: 'border-radius: 0px 0px 5px 5px',
  paddingBottom: '11px',
  marginTop: '20px',
  height: '40px',
})

const FooterItemContainer = styled(Box)({
  paddingTop: '8px',
  display: 'flex',
  gap: '6px',
})

const SearchSuggestionCard = (props: SearchSuggestionCardProps) => {
  const { searchedText, onClick } = props
  return (
    <SearchSuggestionCardMainContainer data-testid={SEARCH_SUGGESTION_TEST_ID}>
      <CardHeader>
        <Typography variant="subtitle2" color={theme.palette.lowEmphasis.main}>
          {SEARCH_SUGGESTION_CARD_HEADER_TEXT}
        </Typography>
        <Typography
          variant="subtitle2"
          color={theme.palette.mediumEmphasis.main}
        >
          {searchedText}
        </Typography>
      </CardHeader>
      <CardMiddleContainer>
        <Typography variant="subtitle3" color={theme.palette.lowEmphasis.main}>
          {TRANSACTIONS}
        </Typography>
      </CardMiddleContainer>
      <SearchedTextContainer >
        <Typography variant="subtitle3" color={theme.palette.highEmphasis.main} onClick={onClick} sx={{cursor: 'pointer'}}>
          {searchedText}
        </Typography>
      </SearchedTextContainer>
      <SuggestionCardFooterContainer>
        <FooterItemContainer>
          <Icon src={QuestionIcon} />
          <Typography
            variant="subtitle3"
            color={theme.palette.mediumEmphasis.main}
          >
            {SEARCH_SUGGESTION_CARD_FOOTER_TEXT}
          </Typography>
        </FooterItemContainer>
      </SuggestionCardFooterContainer>
    </SearchSuggestionCardMainContainer>
  )
}

export default SearchSuggestionCard
