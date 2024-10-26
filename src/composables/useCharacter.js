import { ref, reactive } from 'vue'
import useLocalStorage from '@/composables/useLocalStorage'

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
  const activeCharacter = reactive({ ...defaultCharacterState })
  const recentCharacters = useLocalStorage([], 'recentCharacters')
  const isLoading = ref(false)
  const errorMessage = ref('')

  function addCharacterToRecent(data) {
    if (!data || !data.id) return

    const existingIndex = recentCharacters.value.findIndex(
      char => char.id === data.id,
    )
    if (existingIndex !== -1) {
      recentCharacters.value.splice(existingIndex, 1)
    }

    recentCharacters.value.unshift({
      id: data.id,
      name: data.name || '',
      species: data.species || '',
      type: data.type || '',
      location: data.location?.name || '',
      origin: data.origin?.name || '',
      status: data.status || '',
      image: data.image || '',
    })

    if (recentCharacters.value.length > 5) {
      recentCharacters.value.pop()
    }
  }

  async function getCharacterById(id) {
    const cachedCharacter = recentCharacters.value.find(char => char.id === id)
    if (cachedCharacter) {
      Object.assign(activeCharacter, cachedCharacter)
      return
    }

    try {
      isLoading.value = true
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      )
      if (!response.ok) {
        throw new Error('Character not found')
      }
      const characterData = await response.json()
      Object.assign(activeCharacter, characterData)
      addCharacterToRecent(characterData)
      errorMessage.value = ''
    } catch (error) {
      Object.assign(activeCharacter, defaultCharacterState)
      errorMessage.value = error || 'An error occurred. Please try again'
    } finally {
      isLoading.value = false
    }
  }

  return {
    character: activeCharacter,
    recentCharacters,
    isLoading,
    errorMessage,
    getCharacterById,
  }
}
