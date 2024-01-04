<template>
  
<div>
<h1>This is the index page.</h1>
<p>All other pages except the contact page are handled using dynamic routes and parameters, combined with a composable that provides the data for the example SEO oriented pages.</p>

<p>Typically you would probably want to pull this information from an API and/or database, but for this example we have statically defined it inside the `useSEOList` composable.</p>

<h3>The "SEOList" consists of the following:</h3>
<pre>{{SEOList}}</pre>

<p>With `[...slugs].vue` template we can capture any paths that don't match existing templates/paths.</p>

<p>We can then use the `slugs` route params array to retrieve the appropriate data from the SEOList and render according to any settings or values within the SEO item in question.</p>

<p>For instance a path of "/cleaning/house" would give us a `slugs` route parameter array of: ['cleaning','house']</p>
<p>We can deconstruct this into `category` and `sub`:</p>
<pre>
const [category, sub] = useRoute().params.slug as string[]
</pre>
<p>Then we can search in our SEOList for an item with matching information and display the content</p>
<p>As a treat, I've also implemented a rudimentary set of wrappers for each category.</p>
<p>Have fun :)</p>
</div>
</template>
<script setup lang="ts">
const SEOList = useSEOList()
</script>
<style>
p {
  max-width: 640px;
}
</style>
