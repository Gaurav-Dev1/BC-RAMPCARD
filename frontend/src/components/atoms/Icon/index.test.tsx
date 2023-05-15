import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Icon from '.'
import SearchIcon from '../../../../public/assets/icons/SearchIcon.svg'
import { ICON_DATA_TESTID } from '../../../constants/constant'

it('unit testing of icon component render', () => {
  render(<Icon src={SearchIcon} />)
  expect(screen.getByTestId(ICON_DATA_TESTID)).toBeInTheDocument()
})
