import { defineStore, acceptHMRUpdate } from 'pinia'

const defaultState = {}

export const useDefaultStore = defineStore('DefaultStore', {
  state: () => defaultState,

  getters: {},

  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDefaultStore, import.meta.hot))
}
