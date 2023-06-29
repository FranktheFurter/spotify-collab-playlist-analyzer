<script lang="ts" setup>
const route = useRoute()
const playlistId = route.params.playlistId as string
const { playlist, playlistInfo, usersData } = useSpotifyPlaylistApi(playlistId)
const { getDisplayNameById } = useSpotifyPlaylistDataHelper()
</script>

<template>
  <div>
    <div v-if="playlistInfo" class="py-32 flex flex-col items-center">
      <PlaylistInfo />
      <div class="flex flex-wrap gap-8">
        <UserPanel
          v-for="(user, index) in usersData"
          :key="index"
          :user-data="user"
        />
      </div>
      <div class="py-4">
        <TrackList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
