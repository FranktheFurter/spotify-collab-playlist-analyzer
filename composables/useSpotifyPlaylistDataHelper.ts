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
  const getUserById = (userId: string) => {
    const user = usersData.value.find((user) => user.id === userId)
    return user ? user : null
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
  // more complex helpers that should return the full user Object + the corresponding data
  const getUserWithMostTracks = computed(() => {
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

    let userIdWithMostTracks: string | null = null
    let mostTracks = 0

    for (const userId in userIdToTrackCountMap) {
      if (userIdToTrackCountMap[userId] > mostTracks) {
        mostTracks = userIdToTrackCountMap[userId]
        userIdWithMostTracks = userId
      }
    }

    return {
      user: usersData.value.find((user) => user.id === userIdWithMostTracks),
      tracksCount: mostTracks,
    }
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

    let userIdWithLeastTracks: string | null = null
    let leastTracks = Infinity

    for (const userId in userIdToTrackCountMap) {
      if (userIdToTrackCountMap[userId] < leastTracks) {
        leastTracks = userIdToTrackCountMap[userId]
        userIdWithLeastTracks = userId
      }
    }

    return {
      user: usersData.value.find((user) => user.id === userIdWithLeastTracks),
      tracksCount: leastTracks,
    }
  })

  const getUserWithLongestTrack = computed(() => {
    let userIdWithLongestTrack = ""
    let longestTrack: any = null

    playlist.value.forEach((track) => {
      if (
        track.track.duration_ms >
        (longestTrack ? longestTrack.track.duration_ms : 0)
      ) {
        longestTrack = track
        userIdWithLongestTrack = track.added_by.id
      }
    })

    return {
      user: usersData.value.find((user) => user.id === userIdWithLongestTrack),
      track: longestTrack,
    }
  })

  const getUserWithShortestTrack = computed(() => {
    let userIdWithShortestTrack = ""
    let shortestTrack: any = null

    playlist.value.forEach((track) => {
      if (
        track.track.duration_ms <
        (shortestTrack ? shortestTrack.track.duration_ms : Infinity)
      ) {
        shortestTrack = track
        userIdWithShortestTrack = track.added_by.id
      }
    })

    return {
      user: usersData.value.find((user) => user.id === userIdWithShortestTrack),
      track: shortestTrack,
    }
  })

  const getUserWithMostPopularTrack = computed(() => {
    let userIdWithMostPopularTrack = ""
    let mostPopularTrack: any = null

    playlist.value.forEach((track) => {
      if (
        track.track.popularity >
        (mostPopularTrack ? mostPopularTrack.track.popularity : -Infinity)
      ) {
        mostPopularTrack = track
        userIdWithMostPopularTrack = track.added_by.id
      }
    })

    return {
      user: usersData.value.find(
        (user) => user.id === userIdWithMostPopularTrack
      ),
      track: mostPopularTrack,
    }
  })

  const getUserWithLeastPopularTrack = computed(() => {
    let userIdWithLeastPopularTrack = ""
    let leastPopularTrack: any = null

    playlist.value.forEach((track) => {
      if (
        track.track.popularity <
        (leastPopularTrack ? leastPopularTrack.track.popularity : Infinity)
      ) {
        leastPopularTrack = track
        userIdWithLeastPopularTrack = track.added_by.id
      }
    })

    return {
      user: usersData.value.find(
        (user) => user.id === userIdWithLeastPopularTrack
      ),
      track: leastPopularTrack,
    }
  })

  return {
    getDisplayNameById,
    getUserById,
    getTracksCountByUserId,
    getTotalTrackDurationByUserId,
    getTracksDurationInPercentageByUserId,
    getTotalPlaylistDuration,
    getAverageTrackPopularityByUserId,
    getUserWithMostTracks,
    getUserIdWithLeastTracks,
    getUserWithLongestTrack,
    getUserWithShortestTrack,
    getUserWithMostPopularTrack,
    getUserWithLeastPopularTrack,
  }
}
