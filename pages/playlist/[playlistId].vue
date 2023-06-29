<script lang="ts" setup>
const route = useRoute()
const playlistId = route.params.playlistId as string
const {
  playlist,
  playlistInfo,
  usersData,
  getDisplayNameById,
  getTracksCountByUserId,
  getTotalTrackDurationByUserId,
  getTracksDurationInPercentageByUserId,
} = useSpotifyPlaylistApi(playlistId)
</script>

<template>
  <div v-if="playlistInfo" class="py-32 flex flex-col items-center">
    <img
      v-if="playlistInfo.images && playlistInfo.images.length > 0"
      :src="playlistInfo.images[0].url"
      alt="Playlist cover image"
      width="250"
      height="250"
    />

    <h1>{{ playlistInfo.name }}</h1>
    <h2>{{ playlistInfo.description }}</h2>
    <div class="flex flex-wrap gap-8">
      <UserPanel
        v-for="(user, index) in usersData"
        :key="index"
        :user-data="user"
        :count="getTracksCountByUserId(user.id)"
        :duration="getTotalTrackDurationByUserId(user.id)"
        :duration-percent="getTracksDurationInPercentageByUserId(user.id)"
      />
    </div>
    <div class="py-4">
      <h3 class="">Tracklist:</h3>
      <p v-for="(track, index) in playlist" :key="index">
        {{ track.track.name }} by {{ getDisplayNameById(track.added_by.id) }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
