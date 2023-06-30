<script lang="ts" setup>
const { playlist, playlistInfo, usersData } = useSpotifyPlaylistApi()
const { getTotalPlaylistDuration } = useSpotifyPlaylistDataHelper()
const { msToTime } = useFormatHelper()
</script>

<template>
  <div
    v-if="playlistInfo"
    class="container mx-auto w-100% flex flex-col items-center mt-24 gap-8"
  >
    <img
      v-if="playlistInfo.images && playlistInfo.images.length > 0"
      :src="playlistInfo.images[0].url"
      alt="Playlist cover image"
      width="300"
      height="300"
    />

    <h1>{{ playlistInfo.name }} {{ msToTime(getTotalPlaylistDuration()) }}</h1>
    <h2>
      {{ playlistInfo.description }}
    </h2>
  </div>
</template>

<style scoped></style>
