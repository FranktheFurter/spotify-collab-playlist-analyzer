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
      <div class="container mx-auto flex flex-col gap-16">
        <Users />
        <UserAwards />
        <TrackList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
