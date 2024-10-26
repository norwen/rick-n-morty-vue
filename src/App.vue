<script setup>
import SearchForm from '@/components/SearchForm.vue'
import CharacterImage from '@/components/CharacterImage.vue'
import CharacterDetails from '@/components/CharacterDetails.vue'
import { useCharacter } from '@/composables/useCharacter'
import { computed, ref } from 'vue'
import RecentCharactersList from '@/components/RecentCharactersList.vue'

const {
  character,
  isLoading,
  errorMessage,
  getCharacterById,
  recentCharacters,
} = useCharacter()

const characterId = ref('')
async function handleCharacterSearch(id) {
  await getCharacterById(id)
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
      <CharacterImage
        :url="character.image"
        :is-loading="isLoading"
        :alt="character.name"
        class="mb-4"
      />
      <CharacterDetails
        v-if="!!character.id && !errorMessage && !isLoading"
        v-bind="character"
      />
      <div v-if="!!errorMessage" class="text-danger text-2xl font-semibold">
        {{ errorMessage }}
      </div>
      <RecentCharactersList
        :characters="recentCharacters"
        :active-character-id="character.id"
        class="md:ml-auto order-first md:order-none mb-4"
      />
    </div>
  </main>
</template>
