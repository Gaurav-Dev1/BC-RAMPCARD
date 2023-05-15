import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    primary300: PaletteColor
    primary500: PaletteColor
    primary700: PaletteColor
    structural50: PaletteColor
    structural100: PaletteColor
    icons100: PaletteColor
    stroke50: PaletteColor
    stroke100: PaletteColor
    highEmphasis: PaletteColor
    mediumEmphasis: PaletteColor
    lowEmphasis: PaletteColor
    accent100: PaletteColor
    accentRed100: PaletteColor
    accentGreen100: PaletteColor
    accentGreen50: PaletteColor
    structuralWhite: PaletteColor
  }

  interface PaletteOptions {
    primary300: PaletteColorOptions
    primary500: PaletteColorOptions
    primary700: PaletteColorOptions
    structural50: PaletteColorOptions
    structural100: PaletteColorOptions
    icons100: PaletteColorOptions
    stroke50: PaletteColorOptions
    stroke100: PaletteColorOptions
    highEmphasis: PaletteColorOptions
    mediumEmphasis: PaletteColorOptions
    lowEmphasis: PaletteColorOptions
    accent100: PaletteColorOptions
    accentRed100: PaletteColorOptions
    accentGreen100: PaletteColorOptions
    accentGreen50: PaletteColorOptions
    structuralWhite: PaletteColorOptions
  }

  interface TypographyVariants {
    subtitle3: React.CSSProperties
    body3: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties
    body3?: React.CSSProperties
    caption1?: React.CSSProperties
    caption2?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true
    body3: true
    caption1: true
    caption2: true
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primary500: true
    primary300: true
    structuralWhite: true
  }
}
const theme = createTheme({
  palette: {
    primary300: {
      main: '#CFF5F6',
    },
    primary500: {
      main: '#625AFA',
    },
    primary700: {
      main: '#0055BC',
    },
    structural50: {
      main: '#F6F8FA',
    },
    structural100: {
      main: '#EBEEF1',
    },
    icons100: {
      main: '#545969',
    },
    stroke50: {
      main: '#EBEEF1',
    },
    stroke100: {
      main: '#C0C8D2',
    },
    highEmphasis: {
      main: '#1A1B25',
    },
    mediumEmphasis: {
      main: '#404452',
    },
    lowEmphasis: {
      main: '#687385',
    },
    accent100: {
      main: '#0196ED',
    },
    accentRed100: {
      main: '#ED6704',
    },
    accentGreen100: {
      main: '#006908',
    },
    accentGreen50: {
      main: '#D7F7C2',
    },
    structuralWhite: {
      main: '#FFFFFF',
    }
  },
  typography: {
    h1: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '40px',
      textTransform: 'none',
    },
    h2: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '40px',
      textTransform: 'none',
    },
    subtitle1: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '21px',
      textTransform: 'none',
    },
    subtitle2: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '21px',
      textTransform: 'none',
    },
    subtitle3: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '19px',
      textTransform: 'none',
    },
    body2: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '24px',
      textTransform: 'none',
    },
    body3: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19px',
      textTransform: 'none',
    },
    caption1: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '16px',
      textTransform: 'none',
    },
    caption2: {
      fontFamily: 'Segoe UI',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      textTransform: 'none',
    },
  },
})

export default theme