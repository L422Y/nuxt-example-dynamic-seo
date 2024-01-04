<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink
      v-for="{ category, slug, title } in SEOList"
      :to="`/${category}/${slug}`"
    >
      {{ title }}
    </NuxtLink>
    <NuxtLink to="/contact">Contact Us</NuxtLink>
  </nav>
</template>
<script lang="ts" setup>
const SEOList = useSEOList();
</script>
