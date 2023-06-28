<!-- UserPanel.vue -->
<script lang="ts" setup>
// Define the props
const props = defineProps({
  userData: Object,
});
</script>

<template>
  <div v-if="userData" class="flex flex-col items-center">
    <img
      v-if="userData.images && userData.images.length > 0"
      class="rounded-full"
      :src="userData.images[0].url"
      alt="User profile image"
      width="30"
      height="30"
    />
    <div v-else class="w-30px h-30px bg-gray rounded-full"></div>
    <h3>{{ userData.display_name }}</h3>
  </div>
</template>

<style scoped>
/* Add any styles specific to this component */
</style>
