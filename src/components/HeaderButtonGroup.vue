<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { Sun, Moon, Languages, ChevronDown } from 'lucide-vue-next';
  import { useThemeStore } from '@/stores/theme';
  import { useLanguageStore } from '@/stores/language';

  const themeStore = useThemeStore();
  const languageStore = useLanguageStore();

  const isLangOpen = ref(false);

  onMounted(() => {
    // Set initial theme based on system preference
    themeStore.initTheme();
    languageStore.initLanguage();
  });

  const toggleTheme = () => {
    themeStore.toggleTheme();
  };

  const selectLanguage = (langCode: string) => {
    languageStore.setLanguage(langCode);
    isLangOpen.value = false;
  };

  // Close dropdown when clicking outside
  const closeDropdown = (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-dropdown')) {
      isLangOpen.value = false;
    }
  };

  // Add click outside listener
  watch(isLangOpen, (newValue) => {
    if (newValue) {
      setTimeout(() => {
        window.addEventListener('click', closeDropdown);
      }, 0);
    } else {
      window.removeEventListener('click', closeDropdown);
    }
  });
</script>

<template>
  <div class="flex items-center gap-2">
    <!-- Theme Toggle Button -->
    <button
      v-on:click="toggleTheme"
      class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      v-bind:aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <Sun v-if="!themeStore.isDark" class="h-5 w-5 text-gray-800" />
      <Moon v-else class="h-5 w-5 text-gray-200" />
    </button>

    <!-- Language Dropdown -->
    <div class="relative lang-dropdown">
      <button
        v-on:click="isLangOpen = !isLangOpen"
        class="flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      >
        <Languages class="h-5 w-5 text-gray-800 dark:text-gray-200" />
        <span class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">{{
          languageStore.currentLanguage.name
        }}</span>
        <ChevronDown
          class="h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform duration-200"
          v-bind:class="{ 'rotate-180': isLangOpen }"
        />
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="isLangOpen"
        class="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      >
        <div class="py-1">
          <button
            v-for="lang in languageStore.languages"
            v-bind:key="lang.code"
            v-on:click="selectLanguage(lang.code)"
            class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            v-bind:class="{ 'bg-gray-50 dark:bg-gray-700': languageStore.currentLanguage.code === lang.code }"
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
