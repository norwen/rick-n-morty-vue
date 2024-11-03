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
  <form
    @submit.prevent="handleSearch"
    role="search"
    class="flex w-56 border-b border-black"
    action="#"
  >
    <label for="search" class="sr-only">Search</label>
    <input
      type="text"
      class="flex-1"
      v-model="characterId"
      placeholder="Search..."
      aria-label="Search for a Rick and Morty character"
      inputmode="numeric"
      pattern="^[1-9]\d*$"
      required
    />
    <button type="submit" class="ml-1 hover:opacity-90">Search</button>
  </form>
</template>

<style scoped></style>
