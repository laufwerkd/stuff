import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#e7e7e7',
          primary: '#1dab61',
          'primary-lighten': '#d8fdd2',
          secondary: '#d0d0d0',
          error: '#ec0a3f',
          info: '#0088fc',
          success: '#25d366',
          warning: '#ffff80',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          background: '#0a0a0a',
          surface: '#38383a',
          primary: '#21bf63',
          'primary-lighten': '#103629',
          secondary: '#272729',
          error: '#ef5767',
          info: '#0087fd',
          success: '#21bf63',
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
