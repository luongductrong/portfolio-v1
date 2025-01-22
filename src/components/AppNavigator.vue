<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  const sections = ['About', 'Projects', 'Skills', 'Social', 'Blog'];
</script>

<template>
  <nav class="mb-8">
    <ul class="flex space-x-4">
      <li v-for="section in sections" :key="section">
        <RouterLink
          v-bind:to="{ hash: `#${section.toLowerCase()}` }"
          class="text-gray-400 hover:text-green-400 transition duration-300"
        >
          {{ section }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
