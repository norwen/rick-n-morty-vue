<script setup>
import characterEmpty from '@/assets/character-empty.png'
import IconSpinner from '@/icons/IconSpinner.vue'

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
    <transition name="fade">
      <div
        v-if="isLoading"
        key="loading"
        class="w-full h-full flex items-center justify-center"
      >
        <IconSpinner />
      </div>
      <img
        v-else
        :src="url || characterEmpty"
        :alt="altText"
        class="w-full h-full"
        key="image"
      />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
