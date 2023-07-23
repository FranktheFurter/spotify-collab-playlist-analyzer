<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
const {
  getDisplayNameById,
  getUserWithMostTracks,
  getUserIdWithLeastTracks,
  getUserWithLongestTrack,
  getUserWithShortestTrack,
} = useSpotifyPlaylistDataHelper()
const { msToTime, msToTimeShort } = useFormatHelper()
</script>

<template>
  <div class="container mx-auto">
    <h2>Teilnehmer</h2>
  </div>
  <div
    class="container mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 py-8"
  >
    <UserPanel
      v-for="(user, index) in usersData"
      :key="index"
      :user-data="user"
    />
  </div>
  <h2 class="container mx-auto">Awards:</h2>
  <div class="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-if="
        getUserWithMostTracks &&
        getUserWithMostTracks.tracksCount &&
        getUserWithMostTracks.user &&
        getUserWithMostTracks.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Most Tracks:</h3>
      <p>
        {{
          getUserWithMostTracks
            ? getDisplayNameById(getUserWithMostTracks.user.id)
            : "No user found"
        }}
        with: {{ getUserWithMostTracks.tracksCount }} tracks
      </p>
    </div>
    <div
      v-if="
        getUserIdWithLeastTracks &&
        getUserIdWithLeastTracks.tracksCount &&
        getUserIdWithLeastTracks.user &&
        getUserIdWithLeastTracks.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Least Tracks:</h3>
      <p>
        {{
          getUserIdWithLeastTracks
            ? getDisplayNameById(getUserIdWithLeastTracks.user.id)
            : "No user found"
        }}
        with: {{ getUserIdWithLeastTracks.tracksCount }} tracks
      </p>
    </div>
    <div
      v-if="
        getUserWithLongestTrack &&
        getUserWithLongestTrack.track &&
        getUserWithLongestTrack.user &&
        getUserWithLongestTrack.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Longest Track:</h3>
      <p>
        {{
          getUserWithLongestTrack
            ? getDisplayNameById(getUserWithLongestTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserWithLongestTrack?.track?.track?.name ?? "" }} by
        {{ getUserWithLongestTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{ msToTimeShort(getUserWithLongestTrack?.track?.track?.duration_ms) }}
      </p>
    </div>
    <div
      v-if="
        getUserWithShortestTrack &&
        getUserWithShortestTrack.track &&
        getUserWithShortestTrack.user &&
        getUserWithShortestTrack.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Shortest Track:</h3>
      <p>
        {{
          getUserWithShortestTrack
            ? getDisplayNameById(getUserWithShortestTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserWithShortestTrack?.track?.track?.name ?? "" }} by
        {{ getUserWithShortestTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{ msToTimeShort(getUserWithShortestTrack?.track?.track?.duration_ms) }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
