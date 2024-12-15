import { useLocalStorageStore } from '@/stores/localStorageStore.js'
import { useTheme } from 'vuetify'
import { THEMES } from '@/constants'

export default function useThemeSwitcher() {
  const localStorageStore = useLocalStorageStore()
  const vuetifyTheme = useTheme()

  const theme = localStorageStore.getItem('theme')

  const toggleTheme = () => {
    setToTheme(vuetifyTheme.global.current.value.dark ? THEMES.light.value : THEMES.dark.value)
  }

  const setToTheme = (value) => {
    if (!value) {
      vuetifyTheme.global.name.value = THEMES.dark.value
    } else {
      vuetifyTheme.global.name.value = value
    }
    localStorageStore.setItem('theme', vuetifyTheme.global.name.value)
  }

  return {
    theme,
    toggleTheme,
    setToTheme,
  }
}
