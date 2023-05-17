import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CheckBoxComponent from '.'

const mockHandleChange = jest.fn()

it('testing rendering of checkbox', () => {
  render(<CheckBoxComponent handleChange={mockHandleChange} checked={false} />)
  expect(screen.getByTestId('checkbox')).toBeInTheDocument()
})
