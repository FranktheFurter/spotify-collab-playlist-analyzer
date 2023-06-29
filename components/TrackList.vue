<script lang="ts" setup>
const { playlist } = useSpotifyPlaylistApi()
const { getDisplayNameById } = useSpotifyPlaylistDataHelper()

const getArtistNames = (artists: any[]) => {
  return artists.map((artist: { name: any }) => artist.name).join(", ")
}
</script>

<template>
  <div v-if="playlist" class="flex flex-wrap justify-between">
    <div
      v-for="(track, index) in playlist"
      :key="index"
      class="w-1/8 bg-gray-200/10 m-2 flex flex-col"
    >
      <nuxt-img
        v-if="track.track.album.images && track.track.album.images[0]"
        :src="track.track.album.images[0].url"
        alt="cover"
        loading="lazy"
        class="object-contain w-full"
      />
      <div class="flex-grow">
        <p class="line-clamp-2">{{ track.track.name }}</p>
        <p class="line-clamp-2">{{ getArtistNames(track.track.artists) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
