<script lang="ts" setup>
import { ref, watch } from "vue"
import { useSpotifyPlaylistSearch } from "~/composables/useSpotifyPlaylistSearch"

const searchTerm = ref("")
const { searchResults, isLoading, searchPlaylists } = useSpotifyPlaylistSearch()

watch(searchTerm, (newTerm) => {
  if (newTerm) {
    searchPlaylists(newTerm)
  } else {
    searchResults.value = []
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex w-fit mb-4">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search playlists..."
        class="w-full border-none bg-transparent text-lg text-white focus:outline-none rounded-md bg-gray-50/10 p-2 k-border"
      />
    </div>

    <!-- Existing Playlist Buttons -->
    <div class="flex space-x-2 mb-4">
      <NuxtLink to="/playlist/0zsrKYsMTsy2Iktc6epKOc">
        <button class="btn k-border p-2 bg-transparent text-white">
          Feldzug West
        </button>
      </NuxtLink>
      <NuxtLink to="/playlist/2xAEbfU2EyNetdtDcdx5Cr">
        <button class="btn k-border p-2 bg-transparent text-white">
          Faro Jams
        </button>
      </NuxtLink>
      <NuxtLink to="/playlist/2tF88JEs5MC68rK2DRMMus">
        <button class="btn k-border p-2 bg-transparent text-white">
          Frankreich 3
        </button>
      </NuxtLink>
    </div>

    <!-- Search Results -->
    <div v-if="searchResults.length > 0" class="scroll-container mb-4">
      <NuxtLink
        v-for="playlist in searchResults"
        :key="playlist.id"
        :to="`/playlist/${playlist.id}`"
      >
        <button
          class="btn k-border p-2 bg-transparent text-white w-full text-left"
        >
          <div class="flex flex-col">
            <span class="font-medium">{{ playlist.name }}</span>
            <span class="text-sm opacity-75"
              >by {{ playlist.owner.display_name }}</span
            >
          </div>
        </button>
      </NuxtLink>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-white opacity-75">Searching...</div>
  </div>
</template>

<style scoped>
.k-border {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.scroll-container {
  max-width: 800px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
