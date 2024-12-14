<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  pa: {
    type: String,
    default: "3"
  },
  bgColor: {
    type: String,
    default: 'surface',
  }
})

const commonAttrs = computed(() => {})
</script>

<template>
  <v-card :="{ ...$attrs, ...commonAttrs }" :class="`pa-${props.pa} bg-${props.bgColor}`">
    <slot />
  </v-card>
</template>
