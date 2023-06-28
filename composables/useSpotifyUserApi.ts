import axios from "axios";
import { ref, watch } from "vue";
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";

export const useSpotifyUserApi = (userId: any) => {
  const config = useRuntimeConfig();
  const userData = ref<any>(null);

  // Use the token from the useSpotifyAuthToken composable
  const { token, getAccessToken } = useSpotifyAuthToken();

  // Function to get user data
  const getUserData = async (accessToken: string) => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/users/${userId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios(config);
      userData.value = response.data;
    } catch (error) {
      console.error("Error getting user data", error);
    }
  };

  const fetchData = async () => {
    if (token.value === "") {
      await getAccessToken();
    }
    getUserData(token.value);
  };

  fetchData();

  return { userData };
};
