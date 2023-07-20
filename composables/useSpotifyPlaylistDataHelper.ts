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

  const getUserIdWithMostTracks = computed(() => {
    const userIdToTrackCountMap = playlist.value.reduce(
      (accumulator, track) => {
        if (accumulator[track.added_by.id]) {
          accumulator[track.added_by.id] += 1
        } else {
          accumulator[track.added_by.id] = 1
        }
        return accumulator
      },
      {}
    )

    let userIdWithMostTracks = null
    let mostTracks = 0

    for (const userId in userIdToTrackCountMap) {
      if (userIdToTrackCountMap[userId] > mostTracks) {
        mostTracks = userIdToTrackCountMap[userId]
        userIdWithMostTracks = userId
      }
    }

    return userIdWithMostTracks
  })

  const getUserIdWithLeastTracks = computed(() => {
    const userIdToTrackCountMap = playlist.value.reduce(
      (accumulator, track) => {
        if (accumulator[track.added_by.id]) {
          accumulator[track.added_by.id] += 1
        } else {
          accumulator[track.added_by.id] = 1
        }
        return accumulator
      },
      {}
    )

    let userIdWithLeastTracks = null
    let leastTracks = Infinity

    for (const userId in userIdToTrackCountMap) {
      if (userIdToTrackCountMap[userId] < leastTracks) {
        leastTracks = userIdToTrackCountMap[userId]
        userIdWithLeastTracks = userId
      }
    }

    return userIdWithLeastTracks
  })

  const getUserIdWithLongestTrack = computed(() => {
    let userIdWithLongestTrack = ""
    let longestTrackDuration = 0

    playlist.value.forEach((track) => {
      if (track.track.duration_ms > longestTrackDuration) {
        longestTrackDuration = track.track.duration_ms
        userIdWithLongestTrack = track.added_by.id
      }
    })

    return userIdWithLongestTrack
  })
  const getUserIdWithShortestTrack = computed(() => {
    let userIdWithShortestTrack = ""
    let shortestTrackDuration = Infinity

    playlist.value.forEach((track) => {
      if (track.track.duration_ms < shortestTrackDuration) {
        shortestTrackDuration = track.track.duration_ms
        userIdWithShortestTrack = track.added_by.id
      }
    })

    return userIdWithShortestTrack
  })

  return {
    getDisplayNameById,
    getTracksCountByUserId,
    getTotalTrackDurationByUserId,
    getTracksDurationInPercentageByUserId,
    getTotalPlaylistDuration,
    getAverageTrackPopularityByUserId,
    getUserIdWithMostTracks,
    getUserIdWithLeastTracks,
    getUserIdWithLongestTrack,
    getUserIdWithShortestTrack,
  }
}
