<script setup lang="ts">
  defineProps({
    id: String,
    title: String,
  });
</script>

<template>
  <section v-bind:id="id" class="mb-12">
    <h2 class="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">// {{ title }}</h2>
    <slot />
  </section>
</template>
