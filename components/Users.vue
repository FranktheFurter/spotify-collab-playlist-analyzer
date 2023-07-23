<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
const {
  getDisplayNameById,
  getUserIdWithMostTracks,
  getUserIdWithLeastTracks,
  getUserIdWithLongestTrack,
  getUserIdWithShortestTrack,
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
        getUserIdWithMostTracks &&
        getUserIdWithMostTracks.tracksCount &&
        getUserIdWithMostTracks.user &&
        getUserIdWithMostTracks.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Most Tracks:</h3>
      <p>
        {{
          getUserIdWithMostTracks
            ? getDisplayNameById(getUserIdWithMostTracks.user.id)
            : "No user found"
        }}
        with: {{ getUserIdWithMostTracks.tracksCount }} tracks
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
        getUserIdWithLongestTrack &&
        getUserIdWithLongestTrack.track &&
        getUserIdWithLongestTrack.user &&
        getUserIdWithLongestTrack.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Longest Track:</h3>
      <p>
        {{
          getUserIdWithLongestTrack
            ? getDisplayNameById(getUserIdWithLongestTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserIdWithLongestTrack?.track?.track?.name ?? "" }} by
        {{ getUserIdWithLongestTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{
          msToTimeShort(getUserIdWithLongestTrack?.track?.track?.duration_ms)
        }}
      </p>
    </div>
    <div
      v-if="
        getUserIdWithShortestTrack &&
        getUserIdWithShortestTrack.track &&
        getUserIdWithShortestTrack.user &&
        getUserIdWithShortestTrack.user.id
      "
      class="border-gray/40 border-solid border-rounded-xl p-2"
    >
      <h3>Shortest Track:</h3>
      <p>
        {{
          getUserIdWithShortestTrack
            ? getDisplayNameById(getUserIdWithShortestTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserIdWithShortestTrack?.track?.track?.name ?? "" }} by
        {{ getUserIdWithShortestTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{
          msToTimeShort(getUserIdWithShortestTrack?.track?.track?.duration_ms)
        }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
