import axios from "axios";
import { ref, watch, computed } from "vue"; // Import computed
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";

export const useSpotifyPlaylistApi = () => {
  const playlistId = "0zsrKYsMTsy2Iktc6epKOc";
  const playlist = ref<any[]>([]);
  const playlistInfo = ref<any>(null);

  // Use the token from the useSpotifyAuthToken composable
  const { token } = useSpotifyAuthToken();

  // Function to get all tracks in the playlist
  const getAllTracks = async (accessToken: string) => {
    let offset = 0;
    let total = null;
    const allTracks = [];

    do {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${offset}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const response = await axios(config);
        allTracks.push(...response.data.items);
        total = response.data.total;
        offset += response.data.items.length;
      } catch (error) {
        console.error("Error getting tracks", error);
      }
    } while (offset < total);

    playlist.value = allTracks;
  };

  // Function to get playlist information
  const getPlaylistInfo = async (accessToken: string) => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/playlists/${playlistId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios(config);
      playlistInfo.value = response.data;
    } catch (error) {
      console.error("Error getting playlist information", error);
    }
  };

  // Computed property to get a list of users who added tracks
  const userList = computed(() => {
    if (playlist.value) {
      return Array.from(
        new Set(playlist.value.map((track) => track.added_by.id))
      );
    }
    return [];
  });

  // Watch the token, and once it's set, fetch the tracks and playlist information
  watch(token, (newTokenValue) => {
    if (newTokenValue) {
      getAllTracks(newTokenValue);
      getPlaylistInfo(newTokenValue);
    }
  });

  return { playlist, playlistInfo, userList }; // Include userList in return
};
