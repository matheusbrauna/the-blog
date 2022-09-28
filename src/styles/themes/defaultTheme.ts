import { purpleDark, mauveDark } from '@radix-ui/colors'

export const defaultTheme = {
  colors: {
    ...purpleDark,
    ...mauveDark,

    white: '#fff',
    green: '#4fff4b',
  },

  fonts: {
    regular: "'Roboto'",
    title: "'Poppins'",
  },
}
