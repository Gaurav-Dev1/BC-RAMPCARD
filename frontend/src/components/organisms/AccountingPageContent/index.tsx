import { Grid, SelectChangeEvent, styled } from '@mui/material'
import SearchBar from '../../molecules/SearchBar'
import ButtonIcon from '../../molecules/ButtonIcon'
import theme from '../../../Theme/theme'
import CalenderIcon from '../../../../public/assets/icons/calendarIcon.svg'
import Icon from '../../atoms/Icon'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import FilterIcon from '../../../../public/assets/icons/filterIcon.svg'
import RemoveIcon from '../../../../public/assets/icons/removeIcon.svg'
import { SYNC_BUTTON_LABEL } from '../../../constants/constant'
import ButtonComponent from '../../atoms/Button'
import AccountingTable from '../AccountingTable'
import { accountingTabledata } from '../../../Data/AccountTableData'
import SearchSuggestionCard from '../../molecules/SearchSuggestionCard'
import { useState } from 'react'

const MainContainer = styled(Grid)({
  gap: '12px',
})
const Header = styled(Grid)({
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const HeaderLeftContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
})

const HeaderRightContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
})

const SearchSuggestionCardContainer = styled(Grid)({
  marginTop: '4px',
})

const AccountingPageContent = () => {
  const [searchedText, setSearchedText] = useState<string | undefined>()
  const [searched, setSearched] = useState<boolean>(false)

  const [quickbooksRule, setQuickBookRule] = useState('')

  const onQuickbooksRuleChange = (event: SelectChangeEvent<unknown>): void => {
    console.log(event.target.value as string)
    setQuickBookRule(event.target.value as string)
  }

  const onSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchedText(event.target.value)
  }
  const onSearchedTextClick = () => {
    setSearched(true)
  }
  return (
    <MainContainer>
      <Header container>
        <HeaderLeftContainer item>
          <SearchBar width="456px" handleChange={onSearchTextChange} />
          <ButtonIcon
            variant={'outlined'}
            color={'stroke50'}
            label="All cards"
            labelColor={theme.palette.lowEmphasis.main}
            typographyVariant="caption2"
            borderRadius="12px"
            startIcon={<Icon src={CalenderIcon} />}
            width="122px"
            height="28px"
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          />
          {searched && (
            <ButtonIcon
              variant={'outlined'}
              color={'stroke50'}
              label={searchedText}
              labelColor={theme.palette.primary500.main}
              typographyVariant="caption1"
              borderRadius="12px"
              startIcon={<Icon src={RemoveIcon} />}
              height="28px"
              padding="4px 8px 4px 8px"
            />
          )}
        </HeaderLeftContainer>
        <HeaderRightContainer item>
          <ButtonIcon
            variant={'text'}
            label="Clear filter"
            labelColor={theme.palette.lowEmphasis.main}
            typographyVariant="custom"
            startIcon={<Icon src={ClearIcon} />}
            height="28px"
            color={'stroke50'}
            padding="3px 8px 5px 8px"
          />
          <ButtonIcon
            variant="text"
            label="Filter"
            color="primary500"
            startIcon={<Icon src={FilterIcon} />}
            labelColor={theme.palette.primary500.main}
            typographyVariant="custom"
            height="28px"
            padding="3px 8px 5px 8px"
          />
          <ButtonComponent
            variant={'text'}
            color="structuralWhite"
            label={SYNC_BUTTON_LABEL}
            labelColor={theme.palette.mediumEmphasis.main}
            height="28px"
            typographyVariant="body2"
            boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
            borderRadius="4px"
            padding="3px 8px 5px"
          />
        </HeaderRightContainer>
      </Header>
      {searchedText && !searched && (
        <SearchSuggestionCardContainer>
          <SearchSuggestionCard
            searchedText={searchedText}
            onClick={onSearchedTextClick}
          />
        </SearchSuggestionCardContainer>
      )}
      <AccountingTable
        accountingTableData={accountingTabledata}
        onQuickBooksRuleChange={onQuickbooksRuleChange}
        quickbooksRule={quickbooksRule}
      />
    </MainContainer>
  )
}

export default AccountingPageContent
