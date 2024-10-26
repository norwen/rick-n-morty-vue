import { reactive } from 'vue'

class LocalStorageManager {
  constructor() {
    if (!LocalStorageManager.instance) {
      this.cache = reactive(new Map())
      LocalStorageManager.instance = this
    }
    return LocalStorageManager.instance
  }

  getCache() {
    return this.cache
  }

  getFromLocalStorage(key) {
    if (!key) throw new Error('Key is required')
    try {
      if (!this.cache.has(key)) {
        const item = localStorage.getItem(key)
        this.cache.set(key, item ? JSON.parse(item) : [])
      }
      return this.cache.get(key)
    } catch (error) {
      console.error(`Error getting data from localStorage: ${error.message}`)
      return []
    }
  }

  saveToLocalStorage(key = 'characters', value) {
    try {
      this.cache.set(key, value)
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error(`Error saving to localStorage: ${error.message}`)
      return false
    }
  }

  addToLocalStorageList(key, newItem, maxItems = 3, uniqueKey = 'id') {
    if (!newItem[uniqueKey]) {
      throw new Error(`Item must have a ${uniqueKey} property`)
    }

    const itemList = this.getFromLocalStorage(key)
    const filteredList = itemList.filter(
      item => item[uniqueKey] !== newItem[uniqueKey],
    )

    filteredList.unshift(newItem)
    if (filteredList.length > maxItems) {
      filteredList.pop()
    }

    this.saveToLocalStorage(key, filteredList)
    return filteredList
  }

  removeFromList(key, itemId, uniqueKey = 'id') {
    const itemList = this.getFromLocalStorage(key)
    const filteredList = itemList.filter(item => item[uniqueKey] !== itemId)
    this.saveToLocalStorage(key, filteredList)
    return filteredList
  }
}

const instance = new LocalStorageManager()
Object.freeze(instance)

export default instance
