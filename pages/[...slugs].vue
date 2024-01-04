<template>
  <component :is="categoryWrapper">
    <h1>{{ SEOItem.title }}</h1>
    <div v-html="SEOItem.content" />
  </component>
</template>
<script setup lang="ts">
import { DefaultWrapper, AutoWrapper, CleaningWrapper } from '#components';
const [category, sub] = useRoute().params.slugs as string[];
const SEOList = useSEOList();
const SEOItem = SEOList.find((p) => p.category === category && p.slug === sub);

if (!SEOItem) {
  showError({
    statusCode: 404,
  });
}

let categoryWrapper = DefaultWrapper;

if (SEOItem.category === 'cleaning') {
  categoryWrapper = CleaningWrapper;
}

if (SEOItem.category === 'automobile') {
  categoryWrapper = AutoWrapper;
}
</script>
