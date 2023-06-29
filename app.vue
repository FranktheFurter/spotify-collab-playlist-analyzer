<script setup lang="ts">
const { token } = useSpotifyAuthToken()
</script>
<template>
  <div v-if="token" class="mx-4">
    <NuxtPage />
  </div>
</template>
<style>
/* css resets and other global styles*/
body {
  margin: 0;
  @apply font-comfortaa bg-black text-white;
}
</style>
