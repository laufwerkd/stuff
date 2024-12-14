import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          background: '#000000',
          surface: '#054640',
          primary: '#005d4b',
          secondary: '#06625f',
          error: '#ff8080',
          info: '#8080ff',
          success: '#005d4b',
          warning: '#ffff80',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          background: '#000000',
          surface: '#054640',
          primary: '#005d4b',
          secondary: '#06625f',
          error: '#ff8080',
          info: '#8080ff',
          success: '#005d4b',
          warning: '#ffff80',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
