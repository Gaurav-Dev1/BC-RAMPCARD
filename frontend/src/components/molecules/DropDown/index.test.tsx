import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DropDown from '.'
import { QUICKBOOKS_CATEGORY_OPTION } from '../../../constants/constant'

const mockHandleChange = jest.fn()
describe('DropDown component unit test', () => {
  it('test for DropDown component', () => {
    render(
      <DropDown
        value={''}
        onChange={mockHandleChange}
        items={QUICKBOOKS_CATEGORY_OPTION}
      />
    )
    expect(screen.getByTestId('text-select')).toBeInTheDocument()
  })
})
