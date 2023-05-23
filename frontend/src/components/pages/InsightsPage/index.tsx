import theme from '../../../Theme/theme'
import {
    INSIGHTS_DAILY_DROPDOWN_PLACEHOLDER,
  INSIGHTS_PAGE_DROPDOWN_PLACEHOLDER,
  INSIGHTS_PAGE_MOCK_CALENDER_BUTTON_DATE,
  INSIGHTS_PAGE_SEARCH_BAR_PLACEHOLDER,
  REPORTING,
  REPORTING_CARDS_DATA,
} from '../../../constants/constant'
import Image from '../../atoms/Image'
import Typography from '../../atoms/Typography'
import MainTemplate from '../../templates/MainTemplate'
import { styled, Grid } from '@mui/material'
import RampPageIllustration from '../../../../public/assets/images/illustration.svg'
import ReportingCard from '../../molecules/ReportingCard'
import SearchBar from '../../molecules/SearchBar'
import DropDown from '../../molecules/DropDown'
import ButtonIcon from '../../molecules/ButtonIcon'
import Icon from '../../atoms/Icon'
import CalendarIcon from '../../../../public/assets/icons/calendarIcon.svg'
import DropDownIcon from '../../../../public/assets/icons/dropDownIcon.svg'
import SpendingGraph from '../../molecules/SpendingGraph'

const StyledReportingCardsContainer = styled(Grid)({
  paddingTop: '15px',
})

const ReportingCardContainerHeader = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
})

const IllustrationContainer = styled(Grid)({
  marginRight: '-80px',
})

const CardsContainer = styled(Grid)({
  display: 'flex',
  gap: '50px',
})

const SearchBarAndFiltersContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '38px',
})

const LeftSearchBarContainer = styled(Grid)({
  display: 'flex',
  gap: '13px',
})
const RightSearchBarContainer = styled(Grid)({
  display: 'flex',
  gap: '13px',
})

const GraphContainer = styled(Grid)({
    marginTop: '24px'
})

const InsightsPage = () => {
  return (
    <MainTemplate >
      <StyledReportingCardsContainer data-testid="insights-page">
        <ReportingCardContainerHeader>
          <Typography variant="h1" color={theme.palette.highEmphasis.main}>
            {REPORTING}
          </Typography>
          <IllustrationContainer>
            <Image src={RampPageIllustration} />
          </IllustrationContainer>
        </ReportingCardContainerHeader>
        <CardsContainer>
          {REPORTING_CARDS_DATA.map((data: any) => (
            <ReportingCard
              heading={data.heading}
              content={data.content}
              savingsValue={data.savings}
            />
          ))}
        </CardsContainer>
      </StyledReportingCardsContainer>
      <SearchBarAndFiltersContainer>
        <LeftSearchBarContainer>
          <SearchBar
            placeholder={INSIGHTS_PAGE_SEARCH_BAR_PLACEHOLDER}
            width="456px"
          />
          <DropDown
            placeholder={INSIGHTS_PAGE_DROPDOWN_PLACEHOLDER}
            items={[]}
            width="33%"
            height="28px"
          />
        </LeftSearchBarContainer>
        <RightSearchBarContainer>
          <ButtonIcon
            label={INSIGHTS_PAGE_MOCK_CALENDER_BUTTON_DATE}
            variant="text"
            color='structuralWhite'
            labelColor={theme.palette.lowEmphasis.main}
            startIcon = {<Icon src={CalendarIcon}/>}
            padding='4px 8px 4px 8px'
            boxShadow='0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)'
            height='28px'
          />
          <ButtonIcon
            label={INSIGHTS_DAILY_DROPDOWN_PLACEHOLDER}
            variant="text"
            color='structuralWhite'
            labelColor={theme.palette.lowEmphasis.main}
            endIcon = {<Icon src={DropDownIcon}/>}
            padding='4px 8px 4px 8px'
            boxShadow='0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)'
            height='28px'
          />
          {/* <DropDown items={[]} placeholder={INSIGHTS_DAILY_DROPDOWN_PLACEHOLDER} width='100px' height='28px'/> */}
        </RightSearchBarContainer>
      </SearchBarAndFiltersContainer>
      <GraphContainer>
        <SpendingGraph />
      </GraphContainer>
    </MainTemplate>
  )
}

export default InsightsPage
