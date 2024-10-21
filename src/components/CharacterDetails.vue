<script setup>
defineProps({
  name: String,
  species: String,
  type: String,
  location: String,
  origin: String,
  status: String,
})
</script>

<template>
  <div class="character-info">
    <h1>{{ this.name }}</h1>
    <ul class="*:capitalize">
      <li><strong>Species:</strong>{{ this.species }}</li>
      <li v-if="type"><strong>Type:</strong>{{ this.type }}</li>
      <li><strong>Location:</strong>{{ this.location }}</li>
      <li><strong>Origin:</strong>{{ this.origin }}</li>
      <li><strong>Status:</strong>{{ this.status }}</li>
    </ul>
  </div>
</template>
<style scoped></style>
