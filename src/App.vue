<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="wrapper" class="mx-auto">
    <BaseCard class="ma-3">
      <RouterView />
    </BaseCard>
  </div>
  <AppMenu />
</template>

<style scoped>
#wrapper {
  position: relative;
  min-width: 500px;
  width: 50%;
}
</style>
