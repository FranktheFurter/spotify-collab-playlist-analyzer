<script lang="ts" setup>
import { defineProps } from "vue";
import { useSpotifyUserApi } from "@/composables/useSpotifyUserApi"; // Replace with the correct path to the composable

// Define the props
const props = defineProps({
  userId: String,
});

// Use the composable with the provided user ID
const { userData } = await useSpotifyUserApi(props.userId);
</script>

<template>
  <div v-if="userData">
    <!-- <h2>User Information</h2>
    <p>User ID: {{ userData.id }}</p> -->
    <h3>{{ userData.display_name }}</h3>
    <!-- Add additional fields here -->
  </div>
</template>

<style scoped>
/* Add any styles specific to this component */
</style>
