import { ref, reactive, computed } from 'vue'
export function useCharacter() {
  const character = reactive({
    name: '',
    species: '',
    type: '',
    location: '',
    origin: '',
    status: '',
    imageUrl: '',
  })

  const isLoading = ref(false)
  const errorMessage = ref('')

  const isCharacterPresent = computed(() => !!character.name)

  function setCharacter(data) {
    character.name = data?.name || ''
    character.species = data?.name || ''
    character.type = data?.type || ''
    character.location = data?.location?.name || ''
    character.origin = data?.origin?.name || ''
    character.status = data?.status || ''
    character.imageUrl = data?.image || ''
  }

  async function fetchCharacterById(id) {
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
    } catch (error) {
      setCharacter(null)
      errorMessage.value =
        error.response?.status === 404
          ? 'Character not found'
          : 'An error occurred. Please try again'
    } finally {
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
