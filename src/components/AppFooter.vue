<script setup lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="text-center text-gray-500 mt-12">
    <p>&copy; {{ currentYear || 2025 }} Made with ❤️ by Trong Luong Duc.</p>
  </footer>
</template>
