<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
const {
  getDisplayNameById,
  getUserWithMostTracks,
  getUserIdWithLeastTracks,
  getUserWithLongestTrack,
  getUserWithShortestTrack,
  getUserWithMostPopularTrack,
  getUserWithLeastPopularTrack,
} = useSpotifyPlaylistDataHelper()
const { msToTime, msToTimeShort } = useFormatHelper()
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
    <UserPanel
      v-for="(user, index) in usersData"
      :key="index"
      :user-data="user"
    />
  </div>
</template>

<style scoped></style>
