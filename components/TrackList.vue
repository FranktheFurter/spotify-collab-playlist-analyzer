<script lang="ts" setup>
const { playlist } = useSpotifyPlaylistApi()
const { getDisplayNameById } = useSpotifyPlaylistDataHelper()

const getArtistNames = (artists: any[]) => {
  return artists.map((artist: { name: any }) => artist.name).join(", ")
}
</script>

<template>
  <div
    v-if="playlist"
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 px-8"
  >
    <div
      v-for="(track, index) in playlist"
      :key="index"
      class="aspect-1/1 bg-gray/20 w-100%"
    >
      <nuxt-img
        v-if="track.track.album.images && track.track.album.images[0]"
        :src="track.track.album.images[0].url"
        alt="cover"
        loading="lazy"
        class="object-contain w-100%"
      />
      <div class="p-2 text-white/80">
        <p class="line-clamp-1">
          {{ track.track.name }}
        </p>
        <p class="line-clamp-1">{{ getArtistNames(track.track.artists) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
