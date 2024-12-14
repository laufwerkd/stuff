<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}
</script>

<template>
  <h1>Hello World</h1>
</template>

<style scoped></style>
