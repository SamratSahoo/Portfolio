import { defineStore } from 'pinia'

export const useAuthTokenStore = defineStore('authToken', {
  state: () => {
    return {
      authToken: '',
    }
  },

  actions: {
    setAuthToken(newAuthToken: string) {
      this.authToken = newAuthToken
    },
  },
})
