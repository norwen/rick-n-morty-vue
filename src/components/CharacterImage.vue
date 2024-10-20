<script setup>
import characterEmpty from '@/assets/character-empty.png'

defineProps({
  url: {
    type: String,
    default: characterEmpty,
  },
  altText: {
    type: String,
    default: 'Rick and Morty character',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="character-container">
    <div v-if="isLoading" class="loader">Loading</div>
    <img v-else :src="url" :alt="altText" />
  </div>
</template>

<style scoped>
.character-container {
  width: 14rem;
  height: 14rem;
  box-shadow: 0 0 34px 0 rgba(0, 0, 0, 0.0915);
}
</style>
