import { ref, watch } from 'vue'

export default function (initialValue, key) {
  const val = ref(initialValue)

  const storageVal = localStorage.getItem(key)

  if (storageVal) {
    val.value = JSON.parse(storageVal)
  }

  watch(
    val,
    value => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    { deep: true },
  )

  return val
}
