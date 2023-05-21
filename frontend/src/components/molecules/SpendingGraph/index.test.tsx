import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SpendingGraph from '.'
import { SPENDING_GRAPH_TEST_ID } from '../../../constants/constant'

it('Spending graph render unit test', () => {
  render(<SpendingGraph />)
  expect(screen.getByTestId(SPENDING_GRAPH_TEST_ID)).toBeInTheDocument()
})
