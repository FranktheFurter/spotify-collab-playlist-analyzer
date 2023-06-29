<script lang="ts" setup>
const {
  getTotalTrackDurationByUserId,
  getTracksCountByUserId,
  getTracksDurationInPercentageByUserId,
} = useSpotifyPlaylistDataHelper()
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  userData: Object,
})
const uId = props.userData!.id
const count = getTracksCountByUserId(uId)
const durationPercent = getTracksDurationInPercentageByUserId(uId)
const duration = getTotalTrackDurationByUserId(uId)

const msToTime = (duration: number | undefined) => {
  if (typeof duration !== "number") {
    return "00h 00m 00s" // Return a default value if duration is undefined
  }

  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor(duration / (1000 * 60 * 60))

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return `${formatNumber(hours)}h ${formatNumber(minutes)}m ${formatNumber(
    seconds
  )}s`
}

const formattedDuration = computed(() => msToTime(duration))
</script>

<template>
  <div v-if="userData" class="flex flex-col items-center gap-1">
    <img
      v-if="userData.images && userData.images.length > 0"
      class="rounded-full"
      :src="userData.images[0].url"
      alt="User profile image"
      width="30"
      height="30"
    />
    <div v-else class="w-30px h-30px bg-gray rounded-full"></div>
    <div>{{ userData.display_name }}</div>
    <div>{{ count }}</div>
    <div>{{ formattedDuration }}</div>
    <div>{{ durationPercent?.toFixed(2) }} % Playtime</div>
  </div>
</template>

<style scoped></style>
