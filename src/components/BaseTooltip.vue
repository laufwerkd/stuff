<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: 'top'
  },
  openDelay: {
    type: undefined,
    default: 500,
  },
  activator: {
    type: undefined,
    default: 'parent',
  },
})

const commonAttrs = computed(() => {
  return {
    location: props.location,
    openDelay: props.openDelay,
    activator: props.activator,
  }
})
</script>

<template>
  <v-tooltip :="{ ...$attrs, ...commonAttrs }" :text="text" />
</template>
