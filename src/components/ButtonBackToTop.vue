<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { ArrowUp } from 'lucide-vue-next';

  const isVisible = ref<boolean>(false);

  const handleScroll = () => {
    isVisible.value = window.scrollY > 200;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div>
    <button
      v-if="isVisible"
      v-on:click="scrollToTop"
      class="fixed bottom-5 right-5 bg-green-500 text-white px-2 py-2 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition"
      aria-label="Back to top"
    >
      <ArrowUp />
    </button>
  </div>
</template>
