import { defineStore } from 'pinia';

interface Language {
  code: string;
  name: string;
}

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLang: 'en',
    languages: [
      { code: 'en', name: 'English' },
      { code: 'vi', name: 'Tiếng Việt' },
    ] as Language[],
  }),
  getters: {
    currentLanguage(): Language {
      return this.languages.find((lang) => lang.code === this.currentLang) || this.languages[0];
    },
  },
  actions: {
    setLanguage(langCode: string) {
      if (this.languages.some((lang) => lang.code === langCode)) {
        this.currentLang = langCode;
        localStorage.setItem('language', langCode);
        // Here you would typically call a function to change the application's language
        // For example: this.changeAppLanguage(langCode)
      }
    },
    initLanguage() {
      const savedLang = localStorage.getItem('language');
      if (savedLang && this.languages.some((lang) => lang.code === savedLang)) {
        this.currentLang = savedLang;
      } else {
        this.currentLang = navigator.language.slice(0, 2) || 'en';
        this.setLanguage(this.currentLang);
      }
    },
    // This is a placeholder for where you'd implement actual language changing logic
    // changeAppLanguage(langCode: string) {
    //   // Implement your language changing logic here
    // },
  },
});
