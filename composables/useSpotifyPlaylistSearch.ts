// composables/useSpotifyPlaylistSearch.ts
import axios from "axios"
import { ref } from "vue"
import { useSpotifyAuthToken } from "./useSpotifyAuthToken"

export const useSpotifyPlaylistSearch = () => {
  const { token, getAccessToken } = useSpotifyAuthToken()
  const searchResults = ref<any[]>([])
  const isLoading = ref(false)

  const searchPlaylists = async (query: string) => {
    if (!query) {
      searchResults.value = []
      return
    }

    isLoading.value = true
    try {
      if (token.value === "") {
        await getAccessToken()
      }

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=playlist&limit=50`,
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.statusText}`)
      }

      const data = await response.json()
      searchResults.value = data.playlists.items || []
    } catch (error) {
      console.error("Error searching playlists:", error)
      searchResults.value = []
    } finally {
      isLoading.value = false
    }
  }

  return {
    searchResults,
    isLoading,
    searchPlaylists,
  }
}
