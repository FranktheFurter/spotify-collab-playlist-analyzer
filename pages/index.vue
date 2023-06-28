<script lang="ts" setup>
const playlist = useSpotifyPlaylistApi();
</script>

<template>
  <div>
    <h1>Spotify-collab</h1>
    <p v-for="(track, index) in playlist" :key="index">
      {{ track.track.name }} by {{ track.added_by.id }}
    </p>
  </div>
</template>

<style scoped></style>
