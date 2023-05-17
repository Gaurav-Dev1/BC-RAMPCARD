import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import IconButton from '.'
import ClearIcon from '../../../../public/assets/icons/clearIcon.svg'
import { ICONBUTTON_TESTID } from '../../../constants/constant'

it('positive scenario for getting IconButton', () => {
  render(<IconButton src={ClearIcon} />)
  expect(screen.getByTestId(ICONBUTTON_TESTID)).toBeInTheDocument()
})
