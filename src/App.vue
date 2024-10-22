<script setup>
import SearchForm from '@/components/SearchForm.vue'
import CharacterImage from '@/components/CharacterImage.vue'
import CharacterDetails from '@/components/CharacterDetails.vue'
import { useCharacter } from '@/composables/useCharacter'
import { ref } from 'vue'

const {
  character,
  isLoading,
  errorMessage,
  isCharacterPresent,
  fetchCharacterById,
} = useCharacter()

const characterId = ref('')
async function handleCharacterSearch(id) {
  await fetchCharacterById(id)
}
</script>

<template>
  <main class="container flex flex-col justify-start p-4 md:py-16">
    <SearchForm
      v-model="characterId"
      @search="handleCharacterSearch"
      class="mb-[1.875rem]"
    />
    <div class="flex flex-col md:flex-row gap-x-7">
      <CharacterImage :url="character.imageUrl" :is-loading="isLoading" />
      <CharacterDetails
        v-if="isCharacterPresent && !errorMessage && !isLoading"
        v-bind="character"
      />
      <div v-if="!!errorMessage" class="text-danger text-2xl font-semibold">
        {{ errorMessage }}
      </div>
    </div>
  </main>
</template>
