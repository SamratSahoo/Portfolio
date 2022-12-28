import { defineStore } from 'pinia'
import { HttpMethod } from '~/utils/Types'
import { urls } from '~/utils/Urls'

export const useAuthTokenStore = defineStore('authToken', {
  state: () => {
    return {
      email: '',
      password: '',
      authToken: localStorage.getItem('accessToken')
        ? localStorage.getItem('accessToken')
        : '',
    }
  },

  actions: {
    setAuthToken(newAuthToken: string) {
      this.authToken = newAuthToken
      localStorage.setItem('accessToken', newAuthToken)
    },
    setEmail(email: string) {
      this.email = email
    },
    setPassword(password: string) {
      this.password = password
    },
    async refreshToken() {
      const response = await fetch(urls.baseUrl + urls.api.auth.token, {
        method: HttpMethod.POST,
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const jsonResponse = await response.json()
      this.authToken = jsonResponse.payload
      localStorage.setItem('accessToken', jsonResponse.payload)
    },
  },
})
