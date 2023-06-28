<script lang="ts" setup>
import { useSpotifyPlaylistApi } from "@/composables/useSpotifyPlaylistApi"; // Replace with the correct path
import UserPanel from "@/components/UserPanel.vue"; // Import the UserPanel component

const { playlist, playlistInfo, userList } = useSpotifyPlaylistApi();
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
        v-for="(user, index) in userList"
        :key="index"
        :user-id="user"
      />
    </div>
    <p v-for="(track, index) in playlist" :key="index">
      {{ track.track.name }} by {{ track.added_by.id }}
    </p>
  </div>
</template>

<style scoped></style>
