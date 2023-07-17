<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
const {
  getDisplayNameById,
  getUserIdWithMostTracks,
  getUserIdWithLeastTracks,
} = useSpotifyPlaylistDataHelper()
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
    <h3>Most Tracks:</h3>
    <p>
      {{
        getUserIdWithMostTracks
          ? getDisplayNameById(getUserIdWithMostTracks)
          : "No user found"
      }}
    </p>
    <h3>Least Tracks:</h3>
    <p>
      {{
        getUserIdWithLeastTracks
          ? getDisplayNameById(getUserIdWithLeastTracks)
          : "No user found"
      }}
    </p>
  </div>
</template>

<style scoped></style>
