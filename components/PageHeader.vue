<template>
  <div class="container">
    <div class="navbarItem"></div>
    <div class="navbarItem" @click="redirectToPage('/')">Home</div>
    <div
      class="navbarItem"
      @click="redirectToPage('https://github.com/SamratSahoo')"
    >
      GitHub
    </div>
    <div
      class="navbarItem"
      @click="redirectToPage('https://www.linkedin.com/in/samratsahoo/')"
    >
      LinkedIn
    </div>
    <div class="navbarItem"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageHeader',
  methods: {
    redirectToPage(url: string) {
      window.location.href = url
    },
  },
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color:#fee0cc; */
  margin: 0;
  padding: 16px;
}

.navbarItem {
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 1.2em;
  color: #432371;
  cursor: pointer;
}
</style>
