<script setup lang="ts">
  import HomeSectionFrame from '@/components/HomeSectionFrame.vue';
  import SectionAbout from '@/components/SectionAbout.vue';
  import SectionSkill from '@/components/SectionSkill.vue';
  import SectionProject from '@/components/SectionProject.vue';
  import SectionSocial from '@/components/SectionSocial.vue';
  import SectionBlog from '@/components/SectionBlog.vue';
</script>

<template>
  <main>
    <HomeSectionFrame id="about" title="About">
      <SectionAbout />
    </HomeSectionFrame>

    <HomeSectionFrame id="skills" title="Skills">
      <SectionSkill />
    </HomeSectionFrame>

    <HomeSectionFrame id="projects" title="Projects">
      <SectionProject />
    </HomeSectionFrame>

    <HomeSectionFrame id="social" title="Social">
      <SectionSocial />
    </HomeSectionFrame>

    <HomeSectionFrame id="blog" title="Blog">
      <SectionBlog />
    </HomeSectionFrame>
  </main>
</template>
