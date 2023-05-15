import { render, screen } from '@testing-library/react'
import SearchBar from '.'
import '@testing-library/jest-dom'
const placeholder = 'Search...'
const width = '200px'
describe('SearchBar Unit Test', () => {
  it('check render of searchbar', () => {
    render(<SearchBar placeholder={placeholder} width={width} />)
    const searchBar = screen.getByTestId('searchbar')
    expect(searchBar).toBeInTheDocument()
  })

  it('renders with the correct props', () => {
    render(<SearchBar placeholder={placeholder} width={width} />)
    const searchContainer = screen.getByTestId('searchbar')
    expect(searchContainer).toHaveStyle(`width: ${width}`)

    const textField = screen.getByPlaceholderText(placeholder)
    expect(textField).toBeInTheDocument()
  })

  // Add more test cases as needed
})
