<template>
  <div class="container">
    <div v-if="webToken === ''" class="login-box">
      <label class="login-label">Username</label>
      <input v-model="username" class="credentials-input" type="text" />
      <label class="login-label">Password</label>
      <input v-model="password" class="credentials-input" type="password" />
      <button class="credentials-submit" @click="authenticateUser">
        Login
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { useAuthTokenStore } from '@/stores/authToken'
export default Vue.extend({
  name: 'Admin',
  data() {
    return {
      username: '',
      password: '',
      webToken: '',
    }
  },
  methods: {
    authenticateUser() {
      const authStore = useAuthTokenStore()
      authStore.setAuthToken('Hello World')
    },
  },
})
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 16px;
  background-color: white;
  gap: 10px;
  justify-content: center;
}

.login-label {
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.1em;
}

.credentials-input {
  flex: 1 1 0;
  align-self: center;
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.credentials-submit {
  flex: 1 1 0;
  align-self: center;
  width: 100%;
  background-color: #391e5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.1em;
}
</style>
