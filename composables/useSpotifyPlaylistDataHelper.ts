export const useSpotifyPlaylistDataHelper = () => {
  const { playlist, playlistInfo, usersData } = useSpotifyPlaylistApi()

  const getTotalPlaylistDuration = () => {
    return playlist.value.reduce(
      (sum, track) => sum + track.track.duration_ms,
      0
    )
  }

  const getDisplayNameById = (userId: string) => {
    const user = usersData.value.find((user) => user.id === userId)
    return user ? user.display_name : ""
  }

  const getTracksCountByUserId = (userId: string) => {
    return playlist.value.filter((track) => track.added_by.id === userId).length
  }
  const getTotalTrackDurationByUserId = (userId: string) => {
    return playlist.value
      .filter((track) => track.added_by.id === userId)
      .reduce((sum, track) => sum + track.track.duration_ms, 0)
  }

  const getTracksDurationInPercentageByUserId = (userId: string) => {
    const userTrackDuration = getTotalTrackDurationByUserId(userId)
    const totalTrackDuration = playlist.value.reduce(
      (sum, track) => sum + track.track.duration_ms,
      0
    )
    return (userTrackDuration / totalTrackDuration) * 100
  }
  const getAverageTrackPopularityByUserId = (userId: string) => {
    const userTracks = playlist.value.filter(
      (track) => track.added_by.id === userId
    )

    if (userTracks.length === 0) {
      return 0
    }

    const totalPopularity = userTracks.reduce(
      (sum, track) => sum + track.track.popularity,
      0
    )

    return totalPopularity / userTracks.length
  }

  const usersWithTracks = computed(() => {
    return playlist.value.reduce((users, track) => {
      const userId = track.added_by.id
      users[userId] = (users[userId] || 0) + 1
      return users
    }, {})
  })

  const getUserWithMostTracks = computed(() => {
    const users = usersWithTracks.value
    const userIdWithMostTracks = Object.keys(users).reduce((a, b) =>
      users[a] > users[b] ? a : b
    )

    return getDisplayNameById(userIdWithMostTracks)
  })

  const getUserWithLeastTracks = computed(() => {
    const users = usersWithTracks.value
    const userIdWithLeastTracks = Object.keys(users).reduce((a, b) =>
      users[a] < users[b] ? a : b
    )

    return getDisplayNameById(userIdWithLeastTracks)
  })
  const getUserWithMostPopularity = computed(() => {
    const users = usersWithTracks.value
    const userIdWithMostPopularity = Object.keys(users).reduce((a, b) =>
      users[a] > users[b] ? a : b
    )
    return getDisplayNameById(userIdWithMostPopularity)
  })
  const getUsersWithLeastPopularity = computed(() => {
    const users = usersWithTracks.value
    const userIdWithLeastPopularity = Object.keys(users).reduce((a, b) =>
      users[a] < users[b] ? a : b
    )
    return getDisplayNameById(userIdWithLeastPopularity)
  })

  return {
    getDisplayNameById,
    getTracksCountByUserId,
    getTotalTrackDurationByUserId,
    getTracksDurationInPercentageByUserId,
    getTotalPlaylistDuration,
    getAverageTrackPopularityByUserId,
    getUserWithMostTracks,
    getUserWithLeastTracks,
  }
}
