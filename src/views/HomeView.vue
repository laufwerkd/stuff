<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}
</script>

<template>
  <div>
    <p>Hello World</p>
    <v-btn @click="toggleTheme" color="primary" class="ma-3">Toggle Theme</v-btn>
    <v-btn @click="toggleTheme" color="primary-lighten" class="ma-3">Toggle Theme</v-btn>
    <v-btn @click="toggleTheme" color="secondary" class="ma-3">Toggle Theme</v-btn>
    <v-btn @click="toggleTheme" color="error" class="ma-3">Toggle Theme</v-btn>
    <v-btn @click="toggleTheme" color="info" class="ma-3">Toggle Theme</v-btn>
    <v-btn @click="toggleTheme" color="warning" class="ma-3">Toggle Theme</v-btn>
    <v-card class="bg-surface">test</v-card>
  </div>
</template>

<style scoped></style>
