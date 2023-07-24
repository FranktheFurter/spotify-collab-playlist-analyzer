<script lang="ts" setup>
const { playlist } = useSpotifyPlaylistApi()
const { getDisplayNameById, getUserById } = useSpotifyPlaylistDataHelper()

const getArtistNames = (artists: any[]) => {
  return artists.map((artist: { name: any }) => artist.name).join(", ")
}
</script>

<template>
  <div
    v-if="playlist"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-4 container mx-auto"
  >
    <div
      v-for="(track, index) in playlist"
      :key="index"
      class="w-100% flex md:flex-col bg-opacity-10"
    >
      <nuxt-img
        v-if="track.track.album.images && track.track.album.images[0]"
        :src="track.track.album.images[0].url"
        alt="cover"
        loading="lazy"
        class="object-contain w-20 md:w-100% aspect-1/1"
      />
      <div
        class="px-2 text-white/80 text-xs backdrop-blur-2xl border-solid border-white/20 w-100% md:w-unset flex justify-between items-center py-4 gap-2"
      >
        <div>
          <p class="line-clamp-1 my-0">
            {{ track.track.name }}
          </p>
          <p class="line-clamp-1 my-0">
            {{ getArtistNames(track.track.artists) }}
          </p>
        </div>
        <CircleAvatarSmall :user-data="getUserById(track.added_by.id)" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
