<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  species: String,
  type: String,
  location: String,
  origin: String,
  status: String,
})

const characterInfo = computed(() => [
  { label: 'Species', value: props.species },
  { label: 'Type', value: props.type },
  { label: 'Location', value: props.location },
  { label: 'Origin', value: props.origin },
  { label: 'Status', value: props.status },
])
</script>

<template>
  <div class="character-info">
    <h1 class="text-3xl font-semibold mb-4">{{ this.name }}</h1>
    <tbody>
      <tr v-for="(item, index) in characterInfo" :key="index">
        <th class="w-20 p-1 text-left font-light text-subtle">
          {{ item.label }}
        </th>
        <td
          class="p-1 capitalize font-semibold"
          :class="{
            'text-danger':
              item.label === 'Status' && item.value?.toLowerCase() === 'dead',
            'text-subtle':
              !item.value || item.value?.toLowerCase() === 'unknown',
          }"
        >
          {{ item.value || 'unknown' }}
        </td>
      </tr>
    </tbody>
  </div>
</template>
<style scoped></style>
