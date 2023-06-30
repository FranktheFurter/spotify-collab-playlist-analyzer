import axios from "axios";
import { ref, computed } from "vue";
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";
import { useSpotifyUserApi } from "./useSpotifyUserApi";

const playlist = ref<any[]>([]);
const playlistInfo = ref<any>(null);
const usersData = ref<any[]>([]);

export const useSpotifyPlaylistApi = (playlistId: string | null = null) => {
  const { token, getAccessToken } = useSpotifyAuthToken();

  const getAllTracks = async (accessToken: string) => {
    let offset = 0;
    let total = null;

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
        playlist.value.push(...response.data.items);
        total = response.data.total;
        offset += response.data.items.length;
      } catch (error) {
        console.error("Error getting tracks", error);
      }
    } while (offset < total);
  };

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

  const fetchData = async () => {
    playlist.value = [];
    playlistInfo.value = [];
    usersData.value = [];

    if (token.value === "") {
      await getAccessToken();
    }
    getPlaylistInfo(token.value);
    await getAllTracks(token.value);

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

  if (playlistId) {
    fetchData();
  }

  return {
    playlist,
    playlistInfo,
    usersData,
  };
};
