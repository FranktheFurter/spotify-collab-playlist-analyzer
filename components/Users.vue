<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
</script>

<template>
  <div
    class="container mx-auto w-100% flex flex-wrap gap-4 justify-center py-8"
  >
    <UserPanel
      v-for="(user, index) in usersData"
      :key="index"
      :user-data="user"
    />
  </div>
</template>

<style scoped></style>
