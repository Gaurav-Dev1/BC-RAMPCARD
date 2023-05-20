import { Grid, SelectChangeEvent, styled } from '@mui/material'
import SearchBar from '../../molecules/SearchBar'
import ButtonIcon from '../../molecules/ButtonIcon'
import theme from '../../../Theme/theme'
import CalenderIcon from '../../../../public/assets/icons/calendarIcon.svg'
import Icon from '../../atoms/Icon'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import FilterIcon from '../../../../public/assets/icons/filterIcon.svg'
import RemoveIcon from '../../../../public/assets/icons/removeIcon.svg'
import DeleteIcon from '../../../../public/assets/icons/deleteIcon.svg'
import {
  CREATE_CATEGORY_RULE_BUTTON_TEXT,
  DELETE_BUTTON_LABEL,
  SYNC_BUTTON_LABEL,
} from '../../../constants/constant'
import ButtonComponent from '../../atoms/Button'
import AccountingTable, { AccountingDataType } from '../AccountingTable'
import { accountingTabledata } from '../../../Data/AccountTableData'
import SearchSuggestionCard from '../../molecules/SearchSuggestionCard'
import { useEffect, useState } from 'react'
import TablePaginationFooter from '../TablePaginationFooter'
import RampCards from '../../molecules/RampCards'

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

const RampCardsContainerWithButtons = styled(Grid)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

const ButtonsContainer = styled(Grid)({
  display: 'flex',
  gap: '12px',
})

const AccountingPageContent = () => {
  const [searchedText, setSearchedText] = useState<string | undefined>()
  const [searched, setSearched] = useState<boolean>(false)
  const [transactionsData, setTransactionsData] =
    useState<AccountingDataType[]>(accountingTabledata)
  const [checkedIds, setCheckedIds] = useState<boolean[]>([])

  const items = [] as any
  transactionsData.forEach((accountingData: AccountingDataType) => {
    items[accountingData.id] = false
  })
  const [checkboxes, setCheckboxes] = useState(items)

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const index = Number(name)
    const tempCheckboxes = [...checkboxes]

    tempCheckboxes[index] = !tempCheckboxes[index]
    setCheckboxes(tempCheckboxes)
  }

  useEffect(() => {
    const selectedIndices = checkboxes.reduce(
      (indices: number[], value: boolean, index: number) => {
        if (value) {
          indices.push(index)
        }
        return indices
      },
      []
    )
    setCheckedIds(selectedIndices)
  }, [checkboxes])

  const onQuickbooksRuleChange = (event: SelectChangeEvent<unknown>): void => {
    const { name } = event.target
    const id = Number(name)
    let tempTransactionsData: AccountingDataType[] = [...transactionsData]
    console.log(tempTransactionsData)
    tempTransactionsData.forEach((item, index) => {
      if (item.id === id) {
        item.rule = event.target.value as string
      }
    })
    console.log('shallow array copy -> ', tempTransactionsData)
    setTransactionsData(tempTransactionsData)
    console.log('changed transactions data', transactionsData)
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
    <MainContainer data-testid="accounting-page-content" container>
      <RampCardsContainerWithButtons>
        <RampCards merchantRulesCount={0} width="47%" />
        <ButtonsContainer>
          <ButtonComponent
            variant={'text'}
            color="structuralWhite"
            label={'Sync history'}
            labelColor={theme.palette.mediumEmphasis.main}
            height="32px"
            typographyVariant="body2"
            boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
            borderRadius="4px"
            padding="3px 8px 5px 8px"
          />
          <ButtonComponent
            variant={'text'}
            color="structuralWhite"
            label={'Settings'}
            labelColor={theme.palette.mediumEmphasis.main}
            height="32px"
            typographyVariant="body2"
            boxShadow="0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)"
            borderRadius="4px"
            padding="3px 8px 5px 8px"
          />
          <ButtonComponent
            variant={'contained'}
            color="primary500"
            label={CREATE_CATEGORY_RULE_BUTTON_TEXT}
            labelColor={theme.palette.structuralWhite.main}
            height="32px"
            typographyVariant="body2"
            boxShadow="none"
            borderRadius="4px"
            padding="3px 8px 5px 8px"
          />
        </ButtonsContainer>
      </RampCardsContainerWithButtons>

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
          {checkedIds.length > 0 && (
            <ButtonIcon
              variant={'text'}
              label={DELETE_BUTTON_LABEL}
              labelColor={theme.palette.lowEmphasis.main}
              typographyVariant="custom"
              startIcon={<Icon src={DeleteIcon} />}
              height="28px"
              color={'stroke50'}
              padding="3px 8px 5px 8px"
            />
          )}
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
        accountingTableData={transactionsData}
        onQuickBooksRuleChange={onQuickbooksRuleChange}
        handleCheckbox={handleCheckbox}
        checkboxes={checkboxes}
      />
      <TablePaginationFooter />
    </MainContainer>
  )
}

export default AccountingPageContent
