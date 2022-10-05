<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { property: 'og:title', content: 'Deng Yuxi' },
    { name: 'description', content: 'Deng Yuxi\'s Room' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
  <!-- <Widget /> -->
</template>
