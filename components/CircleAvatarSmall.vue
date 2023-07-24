<script lang="ts" setup>
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  userData: Object,
})
</script>

<template>
  <div v-if="userData">
    <img
      v-if="userData && userData.images && userData.images.length > 0"
      class="rounded-full border-gray/66 border-solid"
      :src="userData.images[0].url"
      alt="User profile image"
      width="30"
      height="30"
    />
    <div
      v-else
      class="w-30px h-30px rounded-full flex items-center justify-center text-white border-gray/66 border-solid text-2.25"
    >
      {{ userData.display_name.slice(0, 3) }}
    </div>
  </div>
</template>

<style scoped></style>
