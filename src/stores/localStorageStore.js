import { defineStore, acceptHMRUpdate } from 'pinia'
import { THEMES } from '@/constants'

const defaultState = {
  items: [],
}

export const useLocalStorageStore = defineStore('LocalStorageStore', {
  state: () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      defaultState.items[key] = localStorage.getItem(key)
    }
    return defaultState
  },

  getters: {},

  actions: {
    getItem(itemName) {
      return localStorage.getItem(itemName)
    },

    setItem(itemName, itemValue) {
      localStorage.setItem(itemName, itemValue)
    },

    removeItem(itemName) {
      localStorage.removeItem(itemName)
    },

    clear() {
      localStorage.clear()
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocalStorageStore, import.meta.hot))
}
