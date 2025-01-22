<script setup lang="ts">
  import { ref } from 'vue';
  import { GitHubIcon } from 'vue3-simple-icons';

  const projects = ref([
    {
      name: 'Project 01 Name',
      description: 'This is a example project description. This is a example project description.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/luongductrong',
    },
    {
      name: 'Project 02 Name',
      description: 'This is a example project description.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/luongductrong',
    },
    {
      name: 'Project 03 Name',
      description: 'This is a example project description.',
      technologies: ['TypeScript', 'NestJS', 'MongoDB'],
      github: 'https://github.com/luongductrong',
    },
    {
      name: 'Project 04 Name',
      description: 'This is a example project description. This is a example project description.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/luongductrong',
    },
  ]);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="project in projects"
      :key="project.name"
      class="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300"
    >
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-semibold text-blue-400">{{ project.name }}</h3>
        <a
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-400 hover:text-gray-50 transition duration-300"
        >
          <GitHubIcon class="w-5 h-5" />
        </a>
      </div>
      <p class="mb-2">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="bg-gray-700 text-xs px-2 py-1 rounded">{{
          tech
        }}</span>
      </div>
    </div>
  </div>
</template>
