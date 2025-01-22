<script setup lang="ts">
  import { readonly } from 'vue';
  import { GitHubIcon, GitLabIcon, LinkedInIcon, FacebookIcon } from 'vue3-simple-icons';

  const socialActivities = readonly([
    {
      platform: 'GitHub',
      username: '@luongductrong',
      url: 'https://github.com/luongductrong',
      icon: GitHubIcon,
    },
    {
      platform: 'GitLab',
      username: '@luongductrong',
      url: 'https://gitlab.com/luongductrong',
      icon: GitLabIcon,
    },
    {
      platform: 'LinkedIn',
      username: '@luongductrong2004',
      url: 'https://linkedin.com/in/luongductrong2004/',
      icon: LinkedInIcon,
    },
    {
      platform: 'Facebook',
      username: '@ltr.dtrly',
      url: 'https://facebook.com/ltr.dtrly/',
      icon: FacebookIcon,
    },
  ]);
</script>

<template>
  <section id="social" class="mb-12">
    <h2 class="text-2xl font-semibold text-purple-400 mb-4">// Social Coding</h2>
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <a
        v-for="activity in socialActivities"
        v-bind:key="activity.platform"
        v-bind:href="activity.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300">
          <component :is="activity.icon" class="w-6 h-6 fill-gray-50" />
          <div>
            <h3 class="font-semibold">{{ activity.platform }}</h3>
            <p class="text-sm text-gray-400">{{ activity.username }}</p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
