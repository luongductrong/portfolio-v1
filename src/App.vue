<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router';
  import { RouterView } from 'vue-router';
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-300 p-6 font-mono">
    <div class="max-w-screen-xl mx-auto">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<style scoped></style>
