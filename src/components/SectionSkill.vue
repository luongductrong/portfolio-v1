<script setup lang="ts">
  import { readonly } from 'vue';

  const skillCategories = readonly([
    {
      name: 'Experienced',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Bootstrap',
        'C++',
        'Java',
        'JSP',
        'REST/RESTful API',
        'JSON',
        'JWT',
        'SQL Server',
        'Git/GitHub',
      ],
    },
    {
      name: 'Currently Learning',
      skills: ['TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Docker', 'OAuth'],
    },
    {
      name: 'Future Interests',
      skills: ['Kotlin', 'Dart', 'Flutter', 'Express', 'NestJS', 'Spring Boot', 'MongoDB'],
    },
  ]);
</script>

<template>
  <div class="space-y-4">
    <div v-for="category in skillCategories" v-bind:key="category.name">
      <h3 class="text-xl font-semibold text-blue-400 mb-2">{{ category.name }}</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in category.skills"
          v-bind:key="skill"
          class="bg-gray-800 px-3 py-1 rounded-full text-green-400 hover:bg-gray-700 transition duration-300"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
