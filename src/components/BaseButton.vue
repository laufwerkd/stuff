<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button',
    required: true,
  },
  prependIcon: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'flat',
  },
})

const commonAttrs = computed(() => {
  return {
    color: props.color,
    variant: props.variant,
  }
})
</script>

<template>
  <v-btn :="{ ...$attrs, ...commonAttrs }">
    <div class="d-flex ga-2">
      <v-icon v-if="prependIcon" :icon="prependIcon" />
      {{ text }}
    </div>
  </v-btn>
</template>
