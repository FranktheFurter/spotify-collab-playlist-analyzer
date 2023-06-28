export const useSpotifyUserApi = (userId: string) => {
  const config = useRuntimeConfig();
  const clientId = config.public.spotifyClientId;
  const clientSecret = config.public.spotifyClientSecret;
  return ref();
};
