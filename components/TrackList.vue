<script lang="ts" setup>
const { playlist } = useSpotifyPlaylistApi()
const { getDisplayNameById } = useSpotifyPlaylistDataHelper()
</script>

<template>
  <div v-if="playlist" class="grid grid-cols-8 gap-8 px-8">
    <div
      v-for="(track, index) in playlist"
      :key="index"
      class="aspect-1/1 bg-gray w-100%"
    >
      <nuxt-img
        v-if="track.track.album.images && track.track.album.images[0]"
        :src="track.track.album.images[0].url"
        alt="cover"
        loading="lazy"
        class="object-contain w-100%"
      />
    </div>
  </div>
</template>

<style scoped></style>
