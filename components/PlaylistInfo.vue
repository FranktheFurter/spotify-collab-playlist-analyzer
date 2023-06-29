<script lang="ts" setup>
const { playlist, playlistInfo, usersData } = useSpotifyPlaylistApi()
const { getTotalPlaylistDuration } = useSpotifyPlaylistDataHelper()
const { msToTime } = useFormatHelper()
</script>

<template>
  <img
    v-if="playlistInfo.images && playlistInfo.images.length > 0"
    :src="playlistInfo.images[0].url"
    alt="Playlist cover image"
    width="250"
    height="250"
  />

  <h1>{{ playlistInfo.name }} {{ msToTime(getTotalPlaylistDuration()) }}</h1>
  <h2>
    {{ playlistInfo.description }}
  </h2>
</template>

<style scoped></style>
