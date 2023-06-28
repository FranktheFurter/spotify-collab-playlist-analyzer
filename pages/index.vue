<script lang="ts" setup>
const { playlist, playlistInfo } = useSpotifyPlaylistApi();
</script>

<template>
  <div class="py-32 flex flex-col items-center">
    <img
      v-if="playlistInfo.images && playlistInfo.images.length > 0"
      :src="playlistInfo.images[0].url"
      alt="Playlist cover image"
      width="250"
      height="250"
    />

    <h1>
      {{ playlistInfo.name }}
    </h1>
    <h2>
      {{ playlistInfo.description }}
    </h2>
    <p v-for="(track, index) in playlist" :key="index">
      {{ track.track.name }} by {{ track.added_by.id }}
    </p>
  </div>
</template>

<style scoped></style>
