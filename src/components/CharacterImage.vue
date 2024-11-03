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
  size: {
    type: String,
    validator(value) {
      return ['small', 'base'].includes(value)
    },
    default: 'base',
  },
})
</script>

<template>
  <div
    :class="`${size === 'small' ? 'h-12 w-12 md:h-16 md:w-16' : 'h-56 w-56 shadow-[0_0_34px_rgba(0,0,0,0.0915)]'}`"
    class="box-content aspect-square rounded overflow-hidden"
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
        :alt="`${altText} Rick and Morty character`"
        class="w-full h-full rounded"
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
