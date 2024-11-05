<template>
  <ul role="listbox">
    <li
      v-for="(character, index) in characters"
      :key="character.id"
      role="option"
      tabindex="0"
      :aria-selected="activeCharacterId === character.id"
      class="max-w-fit rounded border-2 cursor-pointer"
      :class="
        activeCharacterId === character.id
          ? 'border-primary'
          : 'border-transparent'
      "
      @click="selectCharacter(character.id)"
      @keydown.enter="selectCharacter(character.id)"
      @keydown.space.prevent="selectCharacter(character.id)"
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
import CharacterImage from '@/components/CharacterImage.vue'

defineProps({
  activeCharacterId: Number,
  characters: [],
})

const emit = defineEmits(['selectCharacter'])

function selectCharacter(characterId) {
  emit('selectCharacter', characterId)
}
</script>
