import axios from "axios";
import { ref, computed } from "vue";
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";
import { useSpotifyUserApi } from "./useSpotifyUserApi";

export const useSpotifyPlaylistApi = () => {
  const playlistId = "0zsrKYsMTsy2Iktc6epKOc";
  const playlist = ref<any[]>([]);
  const playlistInfo = ref<any>(null);
  const usersData = ref<any[]>([]); // Ref to store the users data

  // Use the token from the useSpotifyAuthToken composable
  const { token, getAccessToken } = useSpotifyAuthToken();

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

  // Fetch the tracks, playlist information, and user data when the token is available
  const fetchData = async () => {
    if (token.value === "") {
      await getAccessToken();
    }
    await getAllTracks(token.value);
    await getPlaylistInfo(token.value);

    // Get unique user IDs
    const userIds = Array.from(
      new Set(playlist.value.map((track) => track.added_by.id))
    );

    // Fetch user data for each user ID
    for (let userId of userIds) {
      const { userData } = useSpotifyUserApi(userId);

      // Watch for changes in userData, and push to usersData once it's populated
      watch(
        () => userData.value,
        (newVal) => {
          if (newVal) {
            usersData.value.push(newVal);
          }
        },
        { immediate: true }
      );
    }
  };

  // Call fetchData immediately
  fetchData();

  return { playlist, playlistInfo, usersData }; // Return usersData along with playlist and playlistInfo
};
