<script setup>
import { onMounted } from 'vue'

import { useLocalStorageStore } from '../stores/localStorageStore.js'

const localStorageStore = useLocalStorageStore()

onMounted(() => {})
</script>

<template>
  <BaseCard>
    <h1>Home</h1>
  </BaseCard>
</template>

<style scoped></style>
