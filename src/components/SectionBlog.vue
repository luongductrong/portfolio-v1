<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  const blogPosts = ref([
    {
      title: 'This is a example blog post',
      excerpt:
        "This is a example blog post's excerpt. This is a example blog post's excerpt. This is a example blog post's excerpt. This is a example blog post's excerpt.",
      link: '/blog/this-is-a-example-blog-post',
    },
    {
      title: 'This is a example blog post',
      excerpt: "This is a example blog post excerpt. This is a example blog post's excerpt.",
      link: '/blog/this-is-a-example-blog-post',
    },
  ]);
</script>

<template>
  <div class="space-y-4">
    <article
      v-for="post in blogPosts"
      v-bind:key="post.title"
      class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300"
    >
      <h3 class="text-xl font-semibold text-blue-400 mb-2">{{ post.title }}</h3>
      <p class="text-gray-400 mb-2">{{ post.excerpt }}</p>
      <RouterLink v-bind:to="post.link" class="text-green-400 hover:underline">Read more</RouterLink>
    </article>
  </div>
</template>
