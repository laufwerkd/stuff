<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { THEMES } from '@/constants'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? THEMES.light.value : THEMES.dark.value
}

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <v-menu transition="fade-transition" location="start" :close-on-content-click="false">
    <template #activator="{ props }">
      <BaseButton size="x-small" icon class="appMenu" @click="toggleMenu" :="props">
        <v-icon :icon="isOpen ? 'mdi-chevron-right' : 'mdi-chevron-left'" class="ms-n1" />
      </BaseButton>
    </template>
    <BaseCard class="me-3">
      <BaseButton @click="toggleTheme" icon="mdi-theme-light-dark" color="secondary" class="align-self-end" />
      <BaseButton text="Logout" icon="mdi-logout" color="error" />
    </BaseCard>
  </v-menu>
  <!-- <div class="d-flex flex-column align-end ga-3">
    <BaseButton @click="toggleMenu" icon icon="mdi-flash" size="x-large" />
    <BaseCard v-if="isOpen" pa="2" transition="scale-transition">
      <v-list density="compact" class="pa-0">
        <v-list-item class="d-flex">
          Theme:
          <BaseButton text="Theme" icon="mdi-theme-light-dark" />
        </v-list-item>
      </v-list>
    </BaseCard>
  </div> -->
</template>

<style scoped>
.appMenu {
  position: fixed;
  top: 12px;
  right: -8px;
}
</style>
