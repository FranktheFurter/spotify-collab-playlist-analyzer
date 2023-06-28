import axios from "axios";
import { ref, watch } from "vue";
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";

export const useSpotifyPlaylistApi = () => {
  const config = useRuntimeConfig();
  const playlistId = "0zsrKYsMTsy2Iktc6epKOc";
  const playlist = ref<any[]>([]);
  const playlistInfo: Ref<any> = ref(null);

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

  // Watch the token, and once it's set, fetch the tracks and playlist information
  watch(token, (newTokenValue) => {
    if (newTokenValue) {
      getAllTracks(newTokenValue);
      getPlaylistInfo(newTokenValue);
    }
  });

  return { playlist, playlistInfo };
};
