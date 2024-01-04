<template>
  <main class="main">
    <Navigation/>
    <div class="main--content">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  gap: 2rem;
  grid-template-columns: auto 1fr;
  width:100%;
  min-height: 100lvh;
}
.main--content {
    padding: 1rem;
    background: #eeeeee;
}
</style>
