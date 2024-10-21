<script setup>
import characterEmpty from '@/assets/character-empty.png'

defineProps({
  url: {
    type: String,
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
  <div
    class="w-56 h-56 rounded overflow-hidden shadow-[0_0_34px_rgba(0,0,0,0.0915)]"
  >
    <div v-if="isLoading" class="w-full h-full">Loading</div>
    <img
      v-else
      :src="url || characterEmpty"
      :alt="altText"
      class="w-full h-full"
    />
  </div>
</template>

<style scoped></style>
