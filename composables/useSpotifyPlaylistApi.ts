import axios from "axios";
import { ref } from "vue";

export const useSpotifyPlaylistApi = () => {
  const config = useRuntimeConfig();

  const playlistId = "0zsrKYsMTsy2Iktc6epKOc";
  const clientId = config.public.spotifyClientId;
  const clientSecret = config.public.spotifyClientSecret;
  const playlist = ref<any[]>([]);
  const token = ref("");

  // Function to get the access token
  const getAccessToken = async () => {
    const authOptions = {
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    };
    try {
      const response = await axios(authOptions);
      token.value = response.data.access_token;
    } catch (error) {
      console.error("Error getting access token", error);
    }
  };

  // Function to get all tracks in the playlist
  const getAllTracks = async () => {
    let offset = 0;
    let total = null;
    const allTracks = [];

    do {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${offset}`,
        headers: {
          Authorization: `Bearer ${token.value}`,
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

    return allTracks;
  };

  // Function to get the playlist using the access token
  const getPlaylist = async () => {
    if (!token.value) {
      await getAccessToken();
    }
    try {
      playlist.value = await getAllTracks();
    } catch (error) {
      console.error("Error getting playlist", error);
    }
  };

  // Immediately invoke the function to get the playlist when the component is created
  getPlaylist();

  return playlist;
};
