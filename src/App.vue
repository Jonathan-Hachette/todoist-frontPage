<script setup>
import { RouterView } from 'vue-router'
import AppAside from './components/AppAside.vue'
</script>

<template>
  <AppAside />
  <main>
    <RouterView />
  </main>
</template>
