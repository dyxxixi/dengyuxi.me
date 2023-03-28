<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { property: 'og:title', content: 'Joseph' },
    { name: 'description', content: 'Joseph\'s Home' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
