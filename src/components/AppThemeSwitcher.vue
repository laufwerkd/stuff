<script setup>
import useThemeSwitcher from '@/composables/useThemeSwitcher.js'

const { toggleTheme } = useThemeSwitcher()
</script>

<template>
  <BaseButton @click="toggleTheme" text="Toggle Theme" icon="mdi-theme-light-dark" color="secondary" />
</template>
