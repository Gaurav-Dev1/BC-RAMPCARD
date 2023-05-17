import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SearchSuggestionCard from '.'
import {
  SEARCHED_TEXT,
  SEARCH_SUGGESTION_TEST_ID,
} from '../../../constants/constant'

const searchedText = SEARCHED_TEXT
describe('SearchSuggestionCard', () => {
  it('renders the suggestion card component', () => {
    render(<SearchSuggestionCard searchedText={searchedText} />)
    const cardElement = screen.getByTestId(SEARCH_SUGGESTION_TEST_ID)
    expect(cardElement).toBeInTheDocument()
  })

  it('renders the card with the correct searched text', () => {
    render(<SearchSuggestionCard searchedText={searchedText} />)
    const cardElements = screen.getAllByText(searchedText)
    expect(cardElements.length).toBeGreaterThan(0)
  })
})
