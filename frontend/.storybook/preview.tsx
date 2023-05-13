import type { Preview } from '@storybook/react'
import theme from '../src/Theme/theme'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import '../src/App.css'

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
