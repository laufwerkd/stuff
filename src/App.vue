<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <AppMenu />
  <div id="wrapper" class="mx-auto pa-3">
    <RouterView />
  </div>
</template>

<style scoped>
#wrapper {
  position: relative;
  max-width: 1264px;
}
</style>
