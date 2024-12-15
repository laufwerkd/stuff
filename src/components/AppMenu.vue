<script setup>
import { onMounted } from 'vue'
import useThemeSwitcher from '@/composables/useThemeSwitcher.js'

const { theme, setToTheme } = useThemeSwitcher()

onMounted(() => {
  setToTheme(theme)
})
</script>

<template>
  <v-menu transition="fade-transition" location="start" :close-on-content-click="false">
    <template #activator="{ props }">
      <BaseButton :="props" icon="mdi-menu" size="default" class="opener" />
    </template>
    <BaseCard class="me-3">
      <AppThemeSwitcher />
    </BaseCard>
  </v-menu>
</template>

<style scoped>
.opener {
  position: fixed;
  top: 12px;
  right: 12px;
}
</style>
