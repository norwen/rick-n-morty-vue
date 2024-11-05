<script setup>
import SearchForm from '@/components/SearchForm.vue'
import CharacterImage from '@/components/CharacterImage.vue'
import CharacterDetails from '@/components/CharacterDetails.vue'
import { useCharacter } from '@/composables/useCharacter'
import { computed, ref } from 'vue'
import RecentCharactersList from '@/components/RecentCharactersList.vue'
import debounce from '@/utils/debounceHelper.js'

const {
  character,
  isLoading,
  errorMessage,
  getCharacterById,
  recentCharacters,
} = useCharacter()

const characterId = ref('')

async function getCharacter(id) {
  if (characterId.value !== id) {
    characterId.value = id
  }

  await getCharacterById(id)
}

const getCharacterDebounced = debounce(getCharacter, 300)
</script>

<template>
  <main class="container flex flex-col justify-start p-4 md:py-16">
    <SearchForm
      v-model="characterId"
      @search="getCharacterDebounced"
      class="mb-4 md:mb-6"
    />
    <div class="flex justify-between">
      <div class="flex flex-col md:flex-row gap-x-7">
        <CharacterImage
          :url="character.image"
          :is-loading="isLoading"
          :alt-text="character.name"
          class="mb-4"
        />
        <CharacterDetails
          v-if="!!character.id && !errorMessage && !isLoading"
          v-bind="character"
        />
        <div
          v-if="!!errorMessage"
          role="alert"
          class="text-danger text-2xl font-semibold"
        >
          {{ errorMessage }}
        </div>
      </div>
      <RecentCharactersList
        class="md:ml-auto md:order-none mb-4"
        :characters="recentCharacters"
        :active-character-id="character.id"
        @selectCharacter="getCharacterDebounced"
      />
    </div>
  </main>
</template>
