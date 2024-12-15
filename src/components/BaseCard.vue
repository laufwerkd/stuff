<script setup>
import { computed } from 'vue'

const props = defineProps({
  pa: {
    type: String,
    default: '3',
  },
  bgColor: {
    type: String,
    default: 'surface',
  },
})

const commonAttrs = computed(() => {})
</script>

<template>
  <v-card :="{ ...$attrs, ...commonAttrs }" :class="`pa-${props.pa} d-flex flex-column ga-3 bg-${props.bgColor} rounded-lg`">
    <slot />
  </v-card>
</template>
