<script lang="ts" setup>
const { usersData } = useSpotifyPlaylistApi()
const {
  getDisplayNameById,
  getUserWithMostTracks,
  getUserIdWithLeastTracks,
  getUserWithLongestTrack,
  getUserWithShortestTrack,
  getUserWithMostPopularTrack,
  getUserWithLeastPopularTrack,
} = useSpotifyPlaylistDataHelper()
const { msToTime, msToTimeShort } = useFormatHelper()
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-if="
        getUserWithMostTracks &&
        getUserWithMostTracks.tracksCount &&
        getUserWithMostTracks.user &&
        getUserWithMostTracks.user.id
      "
      class="k-border p-2"
    >
      <h3>Most Tracks:</h3>
      <p class="opacity-80">
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
      class="k-border p-2"
    >
      <h3>Least Tracks:</h3>
      <p class="opacity-80">
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
      class="k-border p-2"
    >
      <h3>Longest Track:</h3>
      <p class="opacity-80">
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
      class="k-border p-2"
    >
      <h3>Shortest Track:</h3>
      <p class="opacity-80">
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
    <div
      v-if="
        getUserWithMostPopularTrack &&
        getUserWithMostPopularTrack.track &&
        getUserWithMostPopularTrack.user &&
        getUserWithMostPopularTrack.user.id
      "
      class="k-border p-2"
    >
      <h3>Mainstream Manfred:</h3>
      <p class="opacity-80">
        {{
          getUserWithMostPopularTrack
            ? getDisplayNameById(getUserWithMostPopularTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserWithMostPopularTrack?.track?.track?.name ?? "" }} by
        {{ getUserWithMostPopularTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{ getUserWithMostPopularTrack?.track?.track?.popularity }} popularity
      </p>
    </div>
    <div
      v-if="
        getUserWithLeastPopularTrack &&
        getUserWithLeastPopularTrack.track &&
        getUserWithLeastPopularTrack.user &&
        getUserWithLeastPopularTrack.user.id
      "
      class="k-border p-2"
    >
      <h3>Underground Uwe:</h3>
      <p class="opacity-80">
        {{
          getUserWithLeastPopularTrack
            ? getDisplayNameById(getUserWithLeastPopularTrack.user.id)
            : "No user found"
        }}
        with:
        {{ getUserWithLeastPopularTrack?.track?.track?.name ?? "" }} by
        {{ getUserWithLeastPopularTrack?.track?.track?.artists[0].name ?? "" }}
        with:
        {{ getUserWithLeastPopularTrack?.track?.track?.popularity }}
        popularity
      </p>
    </div>
  </div>
</template>

<style scoped></style>
