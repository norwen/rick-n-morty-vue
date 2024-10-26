<template>
  <ul role="listbox" class="listbox">
    <li
      v-for="character in characters"
      :key="character.id"
      role="option"
      tabindex="0"
      :aria-selected="activeCharacterId === character.id"
      class="rounded border-2"
      :class="
        activeCharacterId === character.id
          ? 'border-primary'
          : 'border-transparent'
      "
    >
      <CharacterImage
        :url="character.image"
        :alt="character.name"
        size="small"
        class="p-1"
      />
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import LocalStorageManager from '@/utils/localStorageHelper.js'
import CharacterImage from '@/components/CharacterImage.vue'

defineProps({
  activeCharacterId: Number,
})

const characters = computed(
  () => LocalStorageManager.getFromLocalStorage('characters') || [],
)
</script>
