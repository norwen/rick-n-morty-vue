<script setup>
import { ref } from 'vue'

const characterId = defineModel('modelValue', {
  type: String,
  default: '',
})
const lastCharacterId = ref('')
const emit = defineEmits(['search'])

function handleSearch() {
  if (characterId.value === lastCharacterId.value) {
    return
  }

  lastCharacterId.value = characterId.value
  emit('search', characterId.value)
}
</script>

<template>
  <form @submit.prevent="handleSearch" class="flex w-56 border-b border-black">
    <label for="search" class="sr-only">Search</label>
    <input
      id="search"
      type="text"
      v-model="characterId"
      placeholder="Search..."
      aria-label="Search for a Rick and Morty character"
      inputmode="numeric"
      pattern="^[1-9]\d*$"
      required
    />
    <button type="submit" class="hover:opacity-90">Search</button>
  </form>
</template>

<style scoped></style>
