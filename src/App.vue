<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router';
  import { RouterView } from 'vue-router';
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import AppNavigator from '@/components/AppNavigator.vue';
  import ButtonBackToTop from '@/components/ButtonBackToTop.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300 p-6 font-mono">
    <div class="max-w-screen-xl mx-auto">
      <AppHeader />
      <AppNavigator />
      <RouterView />
      <AppFooter />
    </div>
    <ButtonBackToTop />
  </div>
</template>
