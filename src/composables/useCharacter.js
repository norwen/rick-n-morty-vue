import { ref, reactive, computed } from 'vue'
import LocalStorageManager from '@/utils/localStorageHelper.js'

const defaultCharacterState = {
  id: null,
  name: '',
  species: '',
  type: '',
  location: '',
  origin: '',
  status: '',
  image: '',
}

export function useCharacter() {
  const character = reactive({ ...defaultCharacterState })
  const isLoading = ref(false)
  const errorMessage = ref('')

  const isCharacterPresent = computed(() => !!character.name)

  function setCharacter(data) {
    if (!data) {
      resetCharacter()
      return
    }

    const {
      id = null,
      name = '',
      species = '',
      type = '',
      location: { name: location = '' } = {},
      origin: { name: origin = '' } = {},
      status = '',
      image: image = '',
    } = data

    Object.assign(character, {
      id,
      name,
      species,
      type,
      location,
      origin,
      status,
      image,
    })
  }

  function resetCharacter() {
    Object.assign(character, defaultCharacterState)
  }

  async function fetchCharacterById(id) {
    let characterData = null
    try {
      isLoading.value = true
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      )
      if (!response.ok) {
        throw new Error('Character not found')
      }
      characterData = await response.json()
      setCharacter(characterData)
      LocalStorageManager.addToLocalStorageList('characters', characterData)
      errorMessage.value = ''
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : 'Error accured'
    } finally {
      setCharacter(characterData)
      isLoading.value = false
    }
  }

  return {
    character,
    isLoading,
    isCharacterPresent,
    errorMessage,
    fetchCharacterById,
  }
}
