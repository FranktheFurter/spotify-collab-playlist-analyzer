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

  return {
    getDisplayNameById,
    getTracksCountByUserId,
    getTotalTrackDurationByUserId,
    getTracksDurationInPercentageByUserId,
    getTotalPlaylistDuration,
  }
}
