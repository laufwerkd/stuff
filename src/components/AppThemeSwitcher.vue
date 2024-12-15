<script setup>
import useThemeSwitcher from '@/composables/useThemeSwitcher.js'

const { toggleTheme } = useThemeSwitcher()
</script>

<template>
  <BaseButton @click="toggleTheme" icon="mdi-theme-light-dark" color="secondary" class="align-self-end" />
</template>
