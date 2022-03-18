<template>
    <NavBar />
    <main class="px-7 py-10">
        <router-view />
        <Footer />
    </main>
    <Widget />
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
    meta: [
        { property: "og:title", content: "GeekEvan" },
        { name: "description", content: "GeekEvan's Room" },
    ],
});
</script>
