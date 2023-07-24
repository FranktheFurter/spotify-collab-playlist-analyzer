<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex w-fit mb-4">
      <input
        type="text"
        placeholder="Playlist Id"
        class="w-full border-none bg-transparent text-lg text-white focus:outline-none rounded-md bg-gray-50/10 p-2 k-border"
      />
    </div>
    <div class="flex space-x-2">
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
  </div>
</template>

<style scoped>
.btn {
  @apply text-lg text-white focus:outline-none rounded-md p-2;
}
</style>
