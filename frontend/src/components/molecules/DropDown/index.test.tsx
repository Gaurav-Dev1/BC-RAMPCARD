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
  it('renders selected value when not empty', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const value = 'Item 2';
    const onChange = jest.fn();

    render(
      <DropDown
        value={value}
        onChange={onChange}
        items={items}
        placeholder="Select an item"
      />
    );

    const selectedValue = screen.getByText(value);
    expect(selectedValue).toBeInTheDocument();
  });
})
