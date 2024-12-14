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
    <v-btn color="primary" @click="toggleTheme">Toggle Theme</v-btn>
    <v-btn color="secondary" @click="toggleTheme">Toggle Theme</v-btn>
    <v-card class="bg-surface">test</v-card>
  </div>
</template>

<style scoped></style>
