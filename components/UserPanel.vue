<script lang="ts" setup>
const {
  getTotalTrackDurationByUserId,
  getTracksCountByUserId,
  getTracksDurationInPercentageByUserId,
  getAverageTrackPopularityByUserId,
} = useSpotifyPlaylistDataHelper()

const { msToTime } = useFormatHelper()

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  userData: Object,
})
const uId = props.userData!.id
const count = getTracksCountByUserId(uId)
const durationPercent = getTracksDurationInPercentageByUserId(uId)
const duration = getTotalTrackDurationByUserId(uId)
const avgPopularity = getAverageTrackPopularityByUserId(uId)

const formattedDuration = computed(() => msToTime(duration))
</script>

<template>
  <div v-if="userData" class="flex flex-col items-center gap-1 k-border p-4">
    <img
      v-if="userData.images && userData.images.length > 0"
      class="rounded-full border-gray/66 border-solid"
      :src="userData.images[0].url"
      alt="User profile image"
      width="60"
      height="60"
    />
    <div
      v-else
      class="w-60px h-60px rounded-full flex items-center justify-center text-white border-gray/66 border-solid"
    >
      {{ userData.display_name.slice(0, 3) }}
    </div>
    <div class="mt-2">{{ userData.display_name }}</div>
    <div class="opacity-80">{{ count }}</div>
    <div class="opacity-80">{{ formattedDuration }}</div>
    <div class="opacity-80">{{ durationPercent?.toFixed(2) }} % Playtime</div>
    <div class="opacity-80">{{ avgPopularity?.toFixed(0) }} popularity</div>
  </div>
</template>

<style scoped></style>
