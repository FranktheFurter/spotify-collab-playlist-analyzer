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
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: white;
}
.k-border {
  @apply border-gray/33 hover:border-primary/100 border-solid border-rounded-xl duration-200;
}
</style>
