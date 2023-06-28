import axios from "axios";
import { ref, watch } from "vue";
import { useSpotifyAuthToken } from "./useSpotifyAuthToken";

export const useSpotifyUserApi = async (userId: any) => {
  const config = useRuntimeConfig();
  const userData = ref<any>(null);

  // Use the token from the useSpotifyAuthToken composable
  const { token, getAccessToken } = useSpotifyAuthToken();

  // Wait for the token to be fetched
  if (token.value === "") {
    await getAccessToken();
  }

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

  // Fetch the user data now that the token is available
  getUserData(token.value);

  return { userData };
};
