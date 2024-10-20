<script setup>
import { ref } from 'vue'

const characterId = ref('')
function handleSearch() {}
</script>

<template>
  <form @submit.prevent="handleSearch">
    <label for="search">Search:</label>
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
    <button type="submit">Search</button>
  </form>
</template>

<style scoped></style>
