<template>
  <div class="container">
    <div v-if="authStore.authToken === ''" class="login-box">
      <label class="login-label">Email</label>
      <input v-model="email" class="credentials-input" type="text" />
      <label class="login-label">Password</label>
      <input v-model="password" class="credentials-input" type="password" />
      <button class="credentials-submit" @click="authenticateUser">
        Login
      </button>
      <div v-if="error !== null" class="login-fail">
        {{ error }}
      </div>
    </div>

    <div v-if="authStore.authToken !== ''" class="authenticated-box">
      <div class="side-menu-box">
        <SideBar :sidebar-elements="['Technology Section', 'Career Section']" />
      </div>
      <div class="main-content-box">
        <TechnologyEditor />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { useAuthTokenStore } from '@/stores/authToken'
import { getAuthToken } from '@/actions/User'
import SideBar from '~/components/SideBar.vue'
import TechnologyEditor from '~/components/TechnologyEditor.vue'

export default Vue.extend({
  name: 'Admin',
  components: {
    SideBar,
    TechnologyEditor,
  },
  data() {
    return {
      authStore: useAuthTokenStore(),
      email: '',
      error: '',
      password: '',
      webToken: '',
    }
  },
  methods: {
    async authenticateUser() {
      try {
        this.authStore.setEmail(this.email)
        this.authStore.setPassword(this.password)
        const token = await getAuthToken(this.email, this.password)
        this.authStore.setAuthToken(token)
      } catch (e) {
        this.error = 'Failed to Login to Admin Portal'
      }
    },
  },
})
</script>
<style scoped>
.login-fail {
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.2em;
  color: red;
}

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

.authenticated-box {
  display: flex;
  flex-direction: row;
}
.side-menu-box {
  flex: 1;
}

.main-content-box {
  flex: 5;
}

@media screen and (max-width: 768px) {
  .side-menu-box {
    flex: 3;
  }
}
</style>
