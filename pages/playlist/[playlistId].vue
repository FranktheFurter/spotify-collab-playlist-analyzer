<script lang="ts" setup>
const route = useRoute()
const playlistId = route.params.playlistId as string
const { playlist, playlistInfo, usersData } = useSpotifyPlaylistApi(playlistId)
const { getDisplayNameById } = useSpotifyPlaylistDataHelper()
</script>

<template>
  <div>
    <div class="">
      <PlaylistInfo />
      <Users />
      <div class="py-4">
        <TrackList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
