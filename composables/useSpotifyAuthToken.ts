import axios from "axios";
import { ref } from "vue";

const token = ref("");

export const useSpotifyAuthToken = () => {
  const config = useRuntimeConfig();
  const clientId = config.public.spotifyClientId;
  const clientSecret = config.public.spotifyClientSecret;

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

  if (token.value === "") {
    getAccessToken();
  }

  return { token, getAccessToken };
};
