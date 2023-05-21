import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import theme from '../../../Theme/theme'
import MerchantRuleModal from '.'

describe('MerchantRuleModal unit test', () => {
  it('should render merchant rule modal when modalopen status set to true', () => {
    render(
      <ThemeProvider theme={theme}>
        <MerchantRuleModal modalOpenState={true} />
      </ThemeProvider>
    )
    const merchantRuleModalElement = screen.getByTestId(
      'create-merchant-rule-modal'
    )
    expect(merchantRuleModalElement).toBeInTheDocument()
  })

  it('should close the merchant rule modal when when clicked on cancel button', () => {
    render(
      <ThemeProvider theme={theme}>
        <MerchantRuleModal modalOpenState={true} />
      </ThemeProvider>
    )
    const cancelButton = screen.getByText('Cancel')
    expect(cancelButton).toBeInTheDocument()
    fireEvent.click(cancelButton)
    const merchantRuleModalElement = screen.queryByTestId(
      'create-merchant-rule-modal'
    )
    expect(merchantRuleModalElement).not.toBeInTheDocument()
  })

  it('should close the merchant rule modal when when clicked on create rule button', () => {
    render(
      <ThemeProvider theme={theme}>
        <MerchantRuleModal modalOpenState={true} />
      </ThemeProvider>
    )
    const createRuleButton = screen.getByText('Create rule')
    expect(createRuleButton).toBeInTheDocument()
    fireEvent.click(createRuleButton)
    const merchantRuleModalElement = screen.queryByTestId(
      'create-merchant-rule-modal'
    )
    expect(merchantRuleModalElement).not.toBeInTheDocument()
  })
  test('should update quickbookRule state on category change', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MerchantRuleModal modalOpenState={true} />
      </ThemeProvider>
    )
    const dropDown = getByTestId('text-select')

    expect(dropDown).toBeInTheDocument()

    fireEvent.click(dropDown)
  })
})
