import { purpleDark, mauveDark, greenDark } from '@radix-ui/colors'

export const defaultTheme = {
  colors: {
    ...purpleDark,
    ...mauveDark,

    white: '#fff',
    ...greenDark,
  },

  fonts: {
    regular: "'Roboto'",
    title: "'Poppins'",
  },
}
