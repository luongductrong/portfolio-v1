<script setup lang="ts">
  import HeaderButtonGroup from '@/components/HeaderButtonGroup.vue';
  const name = 'Trong Luong Duc';
  const title = 'Full Stack Developer';
</script>

<template>
  <header class="mb-12">
    <div class="flex flex-row justify-between items-start">
      <h1 class="text-4xl font-bold text-green-400 mb-2">{{ name }}</h1>
      <HeaderButtonGroup />
    </div>
    <p class="text-xl text-gray-500">{{ title }}</p>
  </header>
</template>
