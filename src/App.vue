<script setup>
import SearchForm from '@/components/SearchForm.vue'
import CharacterImage from '@/components/CharacterImage.vue'
import CharacterDetails from '@/components/CharacterDetails.vue'
import { computed, reactive, ref } from 'vue'

const character = reactive({
  name: '',
  species: '',
  type: '',
  location: '',
  origin: '',
  status: '',
  imageUrl: '',
})

function setCharacter(data) {
  character.name = data?.name || ''
  character.species = data?.name || ''
  character.type = data?.type || ''
  character.location = data?.location?.name || ''
  character.origin = data?.origin?.name || ''
  character.status = data?.status || ''
  character.imageUrl = data?.image || ''
}

const isLoading = ref(false)
const hasErrors = ref(false)

const isCharacterPresent = computed(() => {
  return !!character.name
})

const characterId = ref('')
const errorMessage = ref('')

async function handleCharacterSearch(id) {
  try {
    isLoading.value = true
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    )
    if (!response.ok) {
      throw new Error('Character not found')
    }
    setCharacter(await response.json())
    errorMessage.value = ''
    hasErrors.value = false
  } catch (error) {
    setCharacter(null)
    hasErrors.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main
    class="container flex flex-col md:flex-row gap-5 justify-start p-4 md:p-8"
  >
    <div class="flex flex-col">
      <SearchForm
        v-model="characterId"
        @search="handleCharacterSearch"
        class="mb-[1.875rem]"
      />
      <CharacterImage :url="character.imageUrl" :is-loading="isLoading" />
    </div>
    <CharacterDetails
      v-if="isCharacterPresent && !hasErrors && !isLoading"
      v-bind="character"
    />
    <div v-if="hasErrors">Character not found</div>
  </main>
</template>

<style scoped></style>
