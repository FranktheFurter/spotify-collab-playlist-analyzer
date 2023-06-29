import axios from "axios"
import { ref, computed, watch } from "vue"
import { useSpotifyAuthToken } from "./useSpotifyAuthToken"
import { useSpotifyUserApi } from "./useSpotifyUserApi"

const playlist = ref<any[]>([])
const playlistInfo = ref<any>(null)
const usersData = ref<any[]>([])
const userIds = ref<Set<string>>(new Set())

export const useSpotifyPlaylistApi = (playlistId: string | null = null) => {
  const { token, getAccessToken } = useSpotifyAuthToken()

  const fetchUser = async (id: string) => {
    if (userIds.value.has(id)) {
      return
    }
    userIds.value.add(id)
    const { userData } = useSpotifyUserApi(id)
    watch(
      () => userData.value,
      (newVal) => {
        if (newVal) {
          usersData.value.push(newVal)
        }
      },
      { immediate: true }
    )
  }

  const getAllTracks = async (accessToken: string) => {
    let offset = 0
    let total = null
    do {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${offset}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      const response = await axios(config)
      playlist.value.push(...response.data.items)
      total = response.data.total
      offset += response.data.items.length
      for (let track of response.data.items) {
        fetchUser(track.added_by.id)
      }
    } while (offset < total)
  }

  const getPlaylistInfo = async (accessToken: string) => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/playlists/${playlistId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    const response = await axios(config)
    playlistInfo.value = response.data
  }

  const fetchData = async () => {
    playlist.value = []
    playlistInfo.value = []
    usersData.value = []
    userIds.value = new Set()

    if (token.value === "") {
      await getAccessToken()
    }
    getPlaylistInfo(token.value)
    await getAllTracks(token.value)
  }

  if (playlistId) {
    fetchData()
  }

  return {
    playlist,
    playlistInfo,
    usersData,
  }
}
