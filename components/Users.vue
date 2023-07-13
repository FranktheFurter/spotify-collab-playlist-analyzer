<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
</script>

<template>
  <div class="container mx-auto">
    <h2>Teilnehmer</h2>
  </div>
  <div
    class="container mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 py-8"
  >
    <UserPanel
      v-for="(user, index) in usersData"
      :key="index"
      :user-data="user"
    />
  </div>
  <div class="container mx-auto">
    <h2>Awards:</h2>
  </div>
</template>

<style scoped></style>
